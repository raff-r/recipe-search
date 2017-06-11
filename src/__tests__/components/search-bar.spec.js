import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';

import SearchBar from '../../components/search-bar';

describe('SearchBar Component', () => {

    const mockStore = configureStore([thunk]);
    const initialState = {};
    let component, store;

  beforeEach(() => {
    store = mockStore(initialState);
    component = mount( <SearchBar store={store}/> );
  });

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('entering text into form and submit', () => {

      let input;

      beforeEach(() => {
          input = component.find('input#searchTerm');
          input.node.value = 'My new value';
          input.simulate('change');
      });

      it('shows that text in the search term input', () => {
          expect(input.node.value).toEqual('My new value');
      });

      it('when submitted, sets has-result class', () => {
          component.simulate('submit');
          expect(component.html()).toContain('has-results');
      });
  });

});