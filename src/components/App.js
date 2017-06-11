import React, { Component } from 'react';

import SearchBar from './search-bar';
import SearchResults from './search-results';

import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid full-height">
        <div className="row full-height">
          <div className="col-xs-12 full-height">
            <SearchBar />
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
