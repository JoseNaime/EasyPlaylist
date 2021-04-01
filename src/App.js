import './App.css';
import React from 'react';
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {SearchResult} from "./Components/SearchResult/SearchResult";
import {PlayList} from "./Components/PlayList/PlayList"
import Spotify from './util/Spotify';

Spotify.getAccessToken()

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: 'NewPlaylist',
            searchResults: [],
            playlistTracks: []
        };

        this.addTrack = this.addTrack.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    search(term) {
        Spotify.search(term)
            .then(searchResults => {
                this.setState({
                    searchResults: searchResults
                })
            });

    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        this.setState({playlistTracks: [...this.state.playlistTracks, track]})
    }

    deleteTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            this.setState({playlistTracks: this.state.playlistTracks.filter(item => item.id !== track.id)})
        }
    }

    savePlaylist() {
        const tracksURIs = this.state.playlistTracks.map(track => track.uri)
        Spotify.savePlaylist(this.state.playlistName, tracksURIs)
            .then(res => {
                if (res.ok) {
                    alert('Playlist successfully added, refresh your Spotify Playlist to se changes, Enjoy !!')
                } else {
                    alert('Something went wrong, try again later... :(')
                }
            });
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name})
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResult searchResults={this.state.searchResults}
                                      onAdd={this.addTrack}
                                      onDelete={this.deleteTrack}/>

                        <PlayList playlistName={this.state.playlistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onAdd={this.addTrack}
                                  onDelete={this.deleteTrack}
                                  onNameChange={this.updatePlaylistName}
                                  onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
