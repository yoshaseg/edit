import React from 'react';
import CreateClass from 'create-react-class';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

const Article = CreateClass({

    componentDidMount() {
        const {dispatch, params} = this.props;
        // 記事詳細
        // dispatch(fetchArticles(params.category_slug));
    },

    render() {
        const {params} = this.props;
        return (
            <div>
                <Helmet>
                    <html lang="ja_JP"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>
            </div>
        );
    }

});


Article.propTypes = {};

/**
 * サーバーサイドの初期レンダリング用
 * @returns {{}}
 */
Article.fetchData = function () {
    console.log("Article fetchData");
    return {
        type: ""
    };
};


const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: (func)=> {
            dispatch(func);
        }
    }
};
const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticleContainer;