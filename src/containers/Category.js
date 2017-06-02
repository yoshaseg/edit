import React from 'react';
import CreateClass from 'create-react-class';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

import {fetchArticles} from '../actions';

import Section from '../components/Section';

const Category = CreateClass({

    fetchData(){
        console.log("fetchData");
    },

    componentDidMount() {
        const {dispatch, params} = this.props;
        // 最新記事
        dispatch(fetchArticles(params.category_slug));
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
 * @returns {{}}
 */
Category.fetchData = function () {
    console.log("Category fetchData");
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