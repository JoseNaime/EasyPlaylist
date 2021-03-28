import './PlayList.css'
import React from 'react';
import {TrackList} from "../TrackList/TrackList";

export class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value={"NewPlaylist"}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}