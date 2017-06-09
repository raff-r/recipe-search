import React, { Component } from 'react';
import {connect} from 'react-redux';

import searchApi from '../actions/search_api';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {searchTerm: ''};

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }

  onHandleChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  onHandleSubmit(e) {
    e.preventDefault();
    this.props.searchApi({q: this.state.searchTerm});
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div className="form-group">

            <div className="row">
                <div className="col-xs-12 col-md-10">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <label for="searchTerm">Search term</label>
                            <input
                                type="text"
                                name="searchTerm"
                                id="searchTerm"
                                className="form-control"
                                placeholder="Search&hellip;"
                                onChange={this.onHandleChange}
                                value={this.state.searchTerm}
                            />
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <label for="diet">Diet</label>
                            <select
                                className="form-control"
                                name="diet"
                                id="diet"
                                onChange={this.onHandleChange}
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
                            <label for="calaories">Number of calories</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <label>
                                        <input type="radio" name="caloriesType" id="caloriesType-gte" value="gte" checked />
                                        &nbsp;&gt;
                                    </label>
                                </span>
                                <span className="input-group-addon">
                                    <label>
                                        <input type="radio" name="caloriesType" id="caloriesType-lte" value="lte" checked />
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
                                    value={this.state.searchTerm}
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