import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search&hellip;" />
            <span className="input-group-btn">
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
          </span>
          </div>
        </div>
      </form>
    );
  }
};