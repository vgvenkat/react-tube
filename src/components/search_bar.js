import React, { Component } from "react";
import youtube_search from "youtube-api-search";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <input
          onChange={event =>
            this.setState({
              term: event.target.value
            })}
        />
      </div>
    );
  }
}

export default SearchBar;
