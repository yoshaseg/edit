import React from 'react';
import CreateClass from 'create-react-class';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

import {fetchArticles} from '../actions';

import Section from '../components/Section';

const Category = CreateClass({

    componentDidMount() {
        console.log("componentDidMount");
        const {dispatch, params} = this.props;
        // 最新記事
        dispatch(fetchArticles(params.category_slug));
    },

    componentWillReceiveProps(newProps){
        const {dispatch, params} = this.props;
        if (newProps.params.category_slug != params.category_slug) {
            dispatch(fetchArticles(newProps.params.category_slug));
        }
    },

    render() {
        const {params, latestList} = this.props;
        return (
            <div>
                <Helmet>
                    <html lang="ja_JP"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>
                <Section id="categoryList" title={params.category_slug} list={latestList}/>
            </div>
        );
    }

});


Category.propTypes = {};

/**
 * サーバーサイドの初期レンダリング用
 *
 * @param resolve
 * @param reject
 * @param ownProps
 * @returns {*}
 */
Category.fetchData = function (resolve, reject, ownProps) {
    const {params} = ownProps;
    console.log("Category fetchData");
    return fetchArticles(params.category_slug, resolve);
};


const mapStateToProps = (state, ownProps) => {
    return {
        latestList: state.latestList,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: (func)=> {
            dispatch(func);
        }
    }
};
const CategoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export default CategoryContainer;