import {SEARCH_API_SUCCESS} from './types';

export default function searchAPISuccess(recipes) {
    return {
        type: SEARCH_API_SUCCESS,
        payload: recipes
    }
}