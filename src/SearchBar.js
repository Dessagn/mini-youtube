import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };
    render() {
        return(
            <div className="search-bar">
                <div className="inputWithAddon inputIconBg">
                    <i className="fa fa-search fa-lg"></i>
                    <input
                        className="form-control input-lg"
                        type="text" placeholder="Search here ..."
                        onChange={(event) => this.onInputChange(event)} autoFocus />
                </div>
                 <h3> {this.props.status} </h3>
            </div>
        );
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;