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
          <div className="input-group">

            <input
              type="text"
              className="form-control"
              placeholder="Search&hellip;"
              onChange={this.onHandleChange}
              value={this.state.searchTerm}
            />

            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-default">
                  <span className="glyphicon glyphicon-search" />
              </button>
            </span>
            
          </div>
        </div>
      </form>
    );
  }
};

export default connect(null, {searchApi})(SearchBar);