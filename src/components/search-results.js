import React from 'react';
import { connect } from 'react-redux';

import SearchResult from './search-result';

const SearchResults = (props) => {

    const results = props.results.map( (result, index) => (<SearchResult key={index} result={result.recipe} />));

  return (
      <div>
          <h1>Search Results</h1>
          <p>{props.results.length} found for the search [SEARCH PARAMS]</p>
          {results}
      </div>
  )
};

const mapStateToProps = (state) => {
    return { results: state.results };
};

export default connect(mapStateToProps)(SearchResults)