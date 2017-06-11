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

  describe('entering some text', () => {

      let input;

      beforeEach(() => {
          input = component.find('input#searchTerm');
          input.node.value = 'My new value';
          input.simulate('change');
      });

      it('shows that text in the textarea', () => {
          expect(input.props().value).toEqual('My new value');
      });

      it('when submitted, clears the input', () => {
          component.simulate('submit');
          expect(input.props().value).toEqual('');
      });
  });

});