import request from 'superagent';

export function fetchArticles(category) {
    return (dispatch) => {
        dispatch(fetchArticlesRequest());
        request
            // Todo:　開発中はファイル読み込みにする
            .get("http://localhost:3000/demo-api/" + category + ".json")
            .set("Content-Type", "application/json")
            .end(function (err, res) {
                console.log(res);
                dispatch(fetchArticlesComplete(res.body));
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
