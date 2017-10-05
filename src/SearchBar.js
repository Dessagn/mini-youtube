import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };
    render() {
        return(
            <div className="navbar">
                <h2  className="col-sm-1">
                    <a className="you" href="/">
                    <i className="fa fa-youtube fa-lg"> </i>
                    </a>
                </h2>
                <div className="search-bar col-sm-10">
                <div className="inputWithAddon inputIconBg">
                    <i className="fa fa-search fa-lg"></i>
                    <input
                        className="form-control input-lg"
                        type="text" placeholder="Search here ..."
                        onChange={(event) => this.onInputChange(event)} autoFocus />
                </div>
                 <h3> {this.props.status} </h3>
            </div>
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