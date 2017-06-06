import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import {fetchArticles} from '../actions';

import Section from '../components/Section';
import Trending from '../components/Trending';

/**
 * Homeレイアウトコンテナ
 */
const Home = CreateClass({

    componentDidMount: function () {
        const {dispatch, latestList} = this.props;

        // 最新記事
        if (latestList.length == 0) {
            dispatch(fetchArticles("latest"));
        }

    },

    render() {
        const {latestList} = this.props;

        return (
            <div>
                <Helmet>
                    <html lang="ja_JP"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>

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
