import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";
import MockResponse from '../mock-response.json';

import SearchResults from '../../components/search-results';

describe('SearchResults Component', () => {

    const mockStore = configureStore();
    const initialState = {
        results: [{
            "recipe" : {
                "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_f1c853a77986214680bbdd424883499a",
                "label" : "Herbes de Provence Rotisserie Chickens",
                "image" : "https://www.edamam.com/web-img/18d/18dcf05995cb40e8ce4c077972341d7a.jpg",
                "source" : "Bon Appetit",
                "url" : "http://www.bonappetit.com/recipe/herbes-de-provence-rotisserie-chickens",
                "shareAs" : "http://www.edamam.com/recipe/herbes-de-provence-rotisserie-chickens-f1c853a77986214680bbdd424883499a/chicken",
                "yield" : 6.0,
                "dietLabels" : [ "Low-Carb" ],
                "healthLabels" : [ "Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
                "cautions" : [ ],
                "ingredientLines" : [ "2 tablespoons (1/4 stick) butter, room temperature", "2 tablespoons dried herbes de provence*", "1 tablespoon coarse kosher salt", "2 (3 1/2-pound) chickens" ],
                "ingredients" : [ {
                    "text" : "2 tablespoons (1/4 stick) butter, room temperature",
                    "weight" : 28.399999618530273
                }]
            }
        }]
    };
    let component, store;

    beforeEach(() => {
        store = mockStore(initialState);
        component = mount( <SearchResults store={store}/> );
    });

    it('should match the snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});