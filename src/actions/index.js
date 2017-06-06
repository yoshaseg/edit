import fetch from 'isomorphic-fetch';

export function fetchArticles(category, resolve) {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        return fetch(`http://localhost:3000/demo-api/${category}.json`)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchArticlesComplete(json));
                if (resolve) {
                    resolve();
                }
            });
    };
}

function fetchArticlesRequest(data) {
    return {
        type: 'FETCH_ARTICLES_REQUEST',
        data,
    };
}

function fetchArticlesComplete(data) {
    return {
        type: 'FETCH_ARTICLES_COMPLETE',
        data,
    };
}