import recipeAPI from '../api/';
import searchAPISuccess from './search-api-success';

export default function searchApi(params) {
    return function(dispatch) {
        return recipeAPI(params).then(result => {
            console.log(result);
            dispatch(searchAPISuccess(result.hits));
        }).catch(error => {
            throw(error);
        });
    };
}