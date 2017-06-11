import React, { Component } from 'react';
import {connect} from 'react-redux';

import searchApi from '../actions/search-api';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.defaultFormValues = {
        q: '',
        diet: '',
        caloriesType: '',
        calories: ''
    }

    this.state = this.defaultFormValues;

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }

  onHandleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onHandleSubmit(e) {
    e.preventDefault();
    this.props.searchApi(this.state);
    this.setState(this.defaultFormValues);
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div className="form-group">

            <div className="row">
                <div className="col-xs-12 col-md-10">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <label htmlFor="searchTerm">Search term</label>
                            <input
                                type="text"
                                name="q"
                                id="searchTerm"
                                className="form-control"
                                placeholder="Search&hellip;"
                                onChange={this.onHandleChange}
                                value={this.state.q}
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
                                    <label>
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
                                    <label>
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
                        className="btn btn-default btn-block">
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