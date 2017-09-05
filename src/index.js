import React from "react";
import { render } from "react-dom";
//import ReactDOM from "react-dom";
import API_KEY from "./youtube_API";
import SearchBar from "./components/search_bar";
const App = () => (
  <div>
    <SearchBar />
  </div>
);

render(<App />, document.querySelector(".container"));
