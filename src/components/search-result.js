import React from 'react';

import '../styles/search-result.css';

const SearchResult = (props) => {

    const {result} = props;

    const dietLabels = (result.dietLabels) ? result.dietLabels.map((label) => (<li key={label}><span className="label label-info">{label}</span></li>)) : null;
    const healthLabels = (result.healthLabels) ? result.healthLabels.map((label) => (<li key={label}><span className="label label-info">{label}</span></li>)) : null;
    const ingredients = (result.ingredients) ? result.ingredients.map((ingredient, index) => (<li key={index}>{ingredient.text} - {ingredient.weight.toFixed(2)}g</li>)) : null;

    return (
        <div className="row">
            <div className="col-xs-12">
                <h3>{result.label}</h3>
            </div>
            <div className="col-xs-6 col-md-4">
                <img className="img-responsive" src={result.image} alt={result.label} />
            </div>
            <div className="col-xs-6 col-md-3">
                <h4>Diet labels</h4>
                <ul className="list-inline">
                    {dietLabels}
                </ul>
                <h4>Health labels</h4>
                <ul className="list-inline">
                    {healthLabels}
                </ul>
                <h4>Calories</h4>
                <p>{(result.calories) ? result.calories.toFixed(2) : 'N/A'}</p>
            </div>
            <div className="col-xs-12 col-md-5">
                <h4>Ingredients</h4>
                <ul>
                    {ingredients}
                </ul>
            </div>
        </div>
    )
};

export default SearchResult;