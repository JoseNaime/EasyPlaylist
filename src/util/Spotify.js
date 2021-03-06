const clientId = 'ec0940782c8a4fd0b3f65ecd834f8daa'
const redirectUri = 'https://easyplaylist.netlify.app';
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
let accessToken = undefined;
let expiresIn = undefined;

const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            expiresIn = urlExpiresIn[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location = spotifyUrl;
        }
    },

    search(search) {
        return fetch('https://api.spotify.com/v1/search?type=track&q=' + search, {
            headers: {Authorization: 'Bearer ' + accessToken},
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.tracks) {
                    return jsonResponse.tracks.items.map(track => {
                        return {
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            album: track.album.name,
                            uri: track.uri
                        }
                    })
                }
                return []
            })
    },

    savePlaylist(playlistName, urisArray) {
        let userId = undefined;
        let playlistId = undefined;
        const url = 'https://api.spotify.com/v1/me';
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        return fetch(url, {
            headers: headers
        })
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                userId = jsonResponse.id})
            .then(() => {
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        name: playlistName,

                    }),
                }).then(response => response.json())
                    .then(jsonResponse => {
                        console.log(jsonResponse)
                        playlistId = jsonResponse.id})
                    .then(() => {
                        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify({
                                uris: urisArray,
                            })
                        })

                    })
            })
    }
}

export default Spotify