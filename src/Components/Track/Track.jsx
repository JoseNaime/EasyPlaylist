import './Track.css';
import React from 'react';

export class Track extends React.Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
    }

    addTrack(track) {
        this.props.onAdd(track);
    }

    deleteTrack(track) {
        this.props.onDelete(track);
    }

    render() {

        return(
            <div className="Track">

                <div className="Track-information">
                    <h3> {this.props.track.artist}</h3>
                    <p>{this.props.track.name} | {this.props.track.album}</p>
                </div>
                {!this.props.isRemoval ?
                    <button className="Track-action" onClick={() => this.addTrack(this.props.track)}>+</button> :
                    <button className="Track-action" onClick={() => this.deleteTrack(this.props.track)}>-</button>}


            </div>
        )
    }
}