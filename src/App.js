import './App.css';
import React from 'react';
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {SearchResult} from "./Components/SearchResult/SearchResult";
import {PlayList} from "./Components/PlayList/PlayList"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: 1,
                    name: 'Name 1',
                    artist: 'Artist 1',
                    album: 'Album 1'
                },
                {
                    id: 2,
                    name: 'Name 2',
                    artist: 'Artist 2',
                    album: 'Album 2'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResult searchResults={this.state.searchResults}/>
                        <PlayList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
