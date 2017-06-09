import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

import SearchBar from '../../components/search-bar';

describe('SearchBar Component', () => {

  const mockStore = configureStore();
  const initialState = {};
  let component, store;

  beforeEach(() => {
    store = mockStore(initialState);
    component = mount( <SearchBar /> );
  });

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  })

});