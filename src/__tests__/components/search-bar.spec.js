import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import SearchBar from '../../components/search-bar';

describe('SearchBar Component', () => {

  let component;

  beforeEach(() => {
    component = shallow( <SearchBar /> );
  });

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

});