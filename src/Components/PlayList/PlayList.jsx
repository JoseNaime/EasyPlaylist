import './PlayList.css'
import React from 'react';

export class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value={"New Playlist"}/>

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}