import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id="xT9IgDEI1iZyb2wqo8" />
        </div>
        <div className="right-scene" />
      </div>
    );
  }
}

export default App;
