import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import SearchResults from '../../components/search-results';

describe('SearchResults Component', () => {

    const mockStore = configureStore();
    const initialState = [];
    let component, store;

    beforeEach(() => {
        store = mockStore(initialState);
        component = mount( <SearchResults store={store}/> );
    });

    it('should match the snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});