import React, { Component } from 'react';
import {connect} from 'react-redux';

import searchApi from '../actions/search-api';

import '../styles/search-bar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        searchTerm: '',
        diet: '',
        caloriesType: '',
        calories: '',
        submitted: false
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }

  onHandleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onHandleSubmit(e) {
    e.preventDefault();

    const params = {
        q: this.state.searchTerm,
        diet: this.state.diet,
        calories: (this.state.caloriesType && this.state.calories) ? `${this.state.caloriesType} ${this.state.calories}` : null
    };

    this.props.searchApi(params);
    this.setState({submitted: true});
  };

  render() {
    return (
      <form
          className={`search-form ${(this.state.submitted) ? 'has-results' : ''}`}
          onSubmit={this.onHandleSubmit}>
        <div className="form-group">

            <div className="row">
                <div className="col-xs-12 col-md-10">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <label htmlFor="searchTerm">Search term</label>
                            <input
                                type="text"
                                name="searchTerm"
                                id="searchTerm"
                                className="form-control"
                                placeholder="Search&hellip;"
                                onChange={this.onHandleChange}
                                value={this.state.q}
                                required
                            />
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <label htmlFor="diet">Diet</label>
                            <select
                                className="form-control"
                                name="diet"
                                id="diet"
                                onChange={this.onHandleChange}
                                value={this.state.diet}
                            >
                                <option value="">Select option</option>
                                <option value="balanced">Balanced</option>
                                <option value="high-protein">High protein</option>
                                <option value="high-fiber">High fiber</option>
                                <option value="low-fat">Loe fat</option>
                                <option value="low-carb">Low carb</option>
                                <option value="low-sodium">Low sodium</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <label htmlFor="calories">Number of calories</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="caloriesType"
                                            id="caloriesType-gte"
                                            value="gte"
                                            checked={this.state.caloriesType === 'gte'}
                                            onChange={this.onHandleChange}
                                        />
                                        &nbsp;&gt;
                                    </label>
                                </span>
                                <span className="input-group-addon">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="caloriesType"
                                            id="caloriesType-lte"
                                            value="lte"
                                            checked={this.state.caloriesType === 'lte'}
                                            onChange={this.onHandleChange}
                                        />
                                        &nbsp;&lt;
                                    </label>
                                </span>
                                <input
                                    type="number"
                                    name="calories"
                                    id="calories"
                                    className="form-control"
                                    placeholder="Calories"
                                    onChange={this.onHandleChange}
                                    value={this.state.calories}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2">
                    <button
                        type="submit"
                        className="btn">
                        <span className="glyphicon glyphicon-search" />
                        &nbsp;Search
                    </button>
                </div>
            </div>

        </div>
      </form>
    );
  }
};

export default connect(null, {searchApi})(SearchBar);