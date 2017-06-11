import resultReducer from '../../reducers/results';
import { SEARCH_API_SUCCESS } from '../../actions/types';

describe('Results Reducer', () => {
    it('handles action with unknown type', () => {
        expect(resultReducer(undefined, [])).toEqual([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SEARCH_API_SUCCESS, payload: ['result 1'] };
        expect(resultReducer([], action)).toEqual(['result 1']);
    });
});