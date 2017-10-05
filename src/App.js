// import 'react' library from node_modules and assign to the variable """React"""!!
import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY =  'AIzaSyCl0Uw5sotiFLbnHB9HsRyHbsOXFYi7s4I';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('React tutorials');
  }

  videoSearch = (term) => {
    // Search and populate with 'term' vodeos when the app loads first
    YTsearch({key: API_KEY, term: term}, (videos) => {
      this.setState( {
        videos: videos,
        selectedVideo: videos[0]
      } );
    });
  };

  selectVideo = (video) => {
    return this.setState({selectedVideo:video})
  };

  render() {
    const search = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={search} />
        <div className="container">
         <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect = {this.selectVideo}
            videos = {this.state.videos} />
         </div>
      </div>
      </div>

    );
  }
}

export default App;

