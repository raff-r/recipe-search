import { SEARCH_API_SUCCESS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SEARCH_API_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}