import './App.css';
import React from 'react';
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {SearchResult} from "./Components/SearchResult/SearchResult";
import {PlayList} from "./Components/PlayList/PlayList"

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: '',
            searchResults: [
                {
                    id: 1,
                    name: 'Name 1',
                    artist: 'Artist 1',
                    album: 'Album 1',
                    uri: 'Uri 1'
                },
                {
                    id: 2,
                    name: 'Name 2',
                    artist: 'Artist 2',
                    album: 'Album 2',
                    uri: 'Uri 2'
                },
                {
                    id: 3,
                    name: 'Name 3',
                    artist: 'Artist 3',
                    album: 'Album 3',
                    uri: 'Uri 3'
                }],
            playlistTracks: []
        };

        this.addTrack = this.addTrack.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    search(term){
         console.log(term);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        this.setState({playlistTracks: [...this.state.playlistTracks,track]})
    }

    deleteTrack(track) {
       if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            this.setState({playlistTracks: this.state.playlistTracks.filter(item => item.id !== track.id )})
        }
    }

    savePlaylist(){
        const tracksURIs = this.state.playlistTracks.filter(track => track['uri'])
        console.log(tracksURIs)
    }

    updatePlaylistName(name){
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
