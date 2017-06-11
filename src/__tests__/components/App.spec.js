import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import App from '../../components/App';

describe('SearchResults Component', () => {

    let component;

    beforeEach(() => {
        component = shallow( <App /> );
    });

    it('should match the snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});