import './Track.css';
import React from 'react';

export class Track extends React.Component {
    render() {
        console.log(this.props.track)
        return(
            <div className="Track">

                <div className="Track-information">
                    <h3> {this.props.track.artist}</h3>
                    <p>{this.props.track.name} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{/* + or - will go here */}</button>
            </div>
        )
    }
}