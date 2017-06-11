import recipeAPI from '../api/';
import searchAPISuccess from './search-api-success';

export default function searchApi(params) {
    return function(dispatch) {
        return recipeAPI.getData(params).then(result => {
            dispatch(searchAPISuccess(result.hits));
        }).catch(error => {
            throw(error);
        });
    };
}