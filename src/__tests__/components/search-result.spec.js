import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import SearchResult from '../../components/search-result';
import mockResponse from '../mock-response.json';

describe('SearchResults Component', () => {

    let component;

    beforeEach(() => {
        component = shallow( <SearchResult result={mockResponse.hits[0].recipe} /> );
    });

    it('should match the snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});