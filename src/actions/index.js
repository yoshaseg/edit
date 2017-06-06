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

export function fetchArticleDetail(postname, resolve) {
    return function (dispatch) {
        dispatch(fetchArticleDetailRequest());
        return fetch(`http://localhost:3000/demo-api/${postname}.json`)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchArticleDetailComplete(json));
                dispatch(fetchArticles(json.category_slug));
                if (resolve) {
                    resolve();
                }
            });
    };
}

function fetchArticleDetailRequest(data) {
    return {
        type: 'FETCH_ARTICLE_DETAIL_REQUEST',
        data,
    };
}

function fetchArticleDetailComplete(data) {
    return {
        type: 'FETCH_ARTICLE_DETAIL_COMPLETE',
        data,
    };
}