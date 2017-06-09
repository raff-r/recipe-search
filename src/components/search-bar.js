import React, { Component } from 'react';

export default class SearchBar extends Component {

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
                type="button"
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