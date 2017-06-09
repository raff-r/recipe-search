import {SEARCH_API_SUCCESS} from './types';

export default function searchAPISuccess(result) {
    return {
        type: SEARCH_API_SUCCESS,
        payload: result
    }
}