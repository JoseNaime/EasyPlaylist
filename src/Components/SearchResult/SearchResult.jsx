import './SearchResult.css';
import React from 'react';
import {TrackList} from "../TrackList/TrackList";

export class SearchResult extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} onDelete={this.props.onDelete} isRemoval={false}/>
            </div>
        )
    }
}