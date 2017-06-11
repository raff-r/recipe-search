import { SEARCH_API_SUCCESS } from '../../actions/types';
import searchAPISuccess from '../../actions/search-api-success';

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = searchAPISuccess();
        expect(action.type).toEqual(SEARCH_API_SUCCESS);
    });

    it('has the correct payload', () => {
        const action = searchAPISuccess(['result 1', 'result 2']);
        expect(action.payload).toEqual(['result 1', 'result 2']);
    });
});