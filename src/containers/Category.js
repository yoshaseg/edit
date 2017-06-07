import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';

import {fetchArticles} from '../actions';

import Section from '../components/Section';

const Category = CreateClass({

    componentDidMount() {
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