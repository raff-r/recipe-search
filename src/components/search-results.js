import React from 'react';
import { connect } from 'react-redux';

import SearchResult from './search-result';

const SearchResults = (props) => {

    if(!props.results.length) {
        return null;
    }

    const results = props.results.map( (result, index) => (<SearchResult key={index} result={result.recipe} />));

    return (
        <div>
            <h1>Search Results</h1>
            {results}
        </div>
    )
};

const mapStateToProps = (state) => {
    return { results: state.results };
};

export default connect(mapStateToProps)(SearchResults)