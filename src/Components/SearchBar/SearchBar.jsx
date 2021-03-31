import './SearchBar.css';
import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.search}>
                    <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                    <button className="SearchButton" type="submit">SEARCH</button>
                </form>
            </div>
        )
    }
}