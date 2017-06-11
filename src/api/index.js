import axios from 'axios';

const generateQueryString = (params) => {
    let results = [];
    Object.keys(params).forEach(paramKey => {
        const value = params[paramKey];
        if(value) {
            results.push(`${paramKey}=${value}`);
        }
    });

    return results.join('&');
};

export default class recipeAPI {
    static getData(params) {
        const API_ENDPOINT = 'https://api.edamam.com/search';
        const APP_ID = '1f574ae3';
        const APP_KEY = 'a07722f454b207ca0dc3cfa538f382dd';

        let search_endpoint = `${API_ENDPOINT}?app_id=${APP_ID}&app_key=${APP_KEY}`;

        if(params) {
            search_endpoint += `&${generateQueryString(params)}`;
        }

        return axios(search_endpoint).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }
}
