import './PlayList.css'
import React from 'react';
import {TrackList} from "../TrackList/TrackList";

export class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"NewPlaylist"} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks} onAdd={this.props.onAdd} onDelete={this.props.onDelete} isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}