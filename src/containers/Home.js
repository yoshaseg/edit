import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';

import {fetchArticles} from '../actions';

import Section from '../components/Section';
import Trending from '../components/Trending';

/**
 * Homeレイアウトコンテナ
 */
const Home = CreateClass({

    /**
     * Homeコンテナは１ページのみのため毎回DidMountが呼ばれる
     */
    componentDidMount: function () {
        const {dispatch} = this.props;
        // 最新記事
        dispatch(fetchArticles("latest"));
    },

    render() {
        const {latestList} = this.props;

        return (
            <div>

                <Trending id="homeTrending" list={latestList}/>
                <Trending id="homeTrending2" title="Most Popular" list={latestList}/>

                <Section id="homeList" title="Technology" list={latestList}/>

            </div>
        )
    }
});

Home.propTypes = {};

/**
 * サーバーサイドの初期レンダリング用
 * @returns {{}}
 */
Home.fetchData = function (resolve) {
    return fetchArticles("latest", resolve);
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
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
