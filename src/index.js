import React, { Component } from "react";
import { render } from "react-dom";
//import ReactDOM from "react-dom";
import API_KEY from "./youtube_API";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";

import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
class App extends Component {
  constructor() {
    super();
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("India rocks");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    );
  }
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

render(<App />, document.querySelector(".container"));
