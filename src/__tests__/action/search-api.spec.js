import searchApi from '../../actions/search-api';
import recipeAPI from '../../api';
import mockResponse from '../mock-response.json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { SEARCH_API_SUCCESS } from '../../actions/types';

jest.mock('../../api');

describe('saveComment', () => {

    const mockStore = configureStore([thunk]);
    const initialState = {};
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should dispatch SEARCH_API_SUCCESS action', async () => {

        recipeAPI.getData = jest.fn(() => {
            return Promise.resolve(mockResponse)
        });

        await store.dispatch(searchApi({q: 'chicken'}));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_API_SUCCESS);
        expect(actions[0].payload).toEqual(mockResponse.hits);

    });

});