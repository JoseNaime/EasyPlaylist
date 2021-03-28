import './TrackList.css'
import React from 'react'
import {Track} from "../Track/Track";

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks && this.props.tracks.map(track => {
                    return <Track id={'track_' + track.id} track={track}/>
                })}
            </div>
        );
    }
}