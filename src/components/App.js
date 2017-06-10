import React, { Component } from 'react';

import SearchBar from './search-bar';
import SearchResults from './search-results';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <SearchBar />
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
