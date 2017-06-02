import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

/**
 * Homeレイアウトコンテナ
 */
const Home = CreateClass({
    render() {
        const {testList} = this.props;

        return (
            <div>
                <Helmet>
                    <html lang="ja_JP"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>
                <div>
                    {
                        testList.map((item, i) => {
                            return (
                                <article key={"homeList-" + i}>
                                    {item.title}
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
});


Home.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {
        testList: state.testList,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
