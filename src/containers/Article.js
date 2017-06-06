import React from 'react';
import CreateClass from 'create-react-class';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {fetchArticleDetail} from '../actions';
import styles from './article.scss';

import Section from '../components/Section';

const Article = CreateClass({

    componentDidMount() {
        const {dispatch, params} = this.props;
        // 記事詳細
        dispatch(fetchArticleDetail(params.postname));
    },

    componentWillReceiveProps(newProps){
        const {dispatch, params} = this.props;
        if (newProps.params.postname != params.postname) {
            dispatch(fetchArticleDetail(newProps.params.postname));
        }
    },

    render() {
        const {nowDetailLoading, detail, latestList} = this.props;
        return (
            <div>
                <Helmet>
                    <html lang="ja_JP"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <title>{detail.title || ""}</title>
                </Helmet>
                {
                    nowDetailLoading == false ?
                        <div className={styles.entryDetail}>
                            <div className={styles.entryDetailHead}>
                                <h1>{detail.title || ""}</h1>
                                <time>{detail.pubDate}</time>
                            </div>
                            {
                                typeof detail.people != "undefined" && detail.people.length > 0 ?
                                    <div className={styles.people}>
                                        <p><i className="fa fa-link"/></p>
                                        {
                                            detail.people.map(person=> {
                                                return <img src={person} title="person name"/>;
                                            })
                                        }
                                    </div> : null
                            }
                            <div className={styles.entryDetailImage}>
                                <img src={detail.thumbnail}/>
                            </div>
                            <div className={styles.entryDetailBody} dangerouslySetInnerHTML={{
                                __html: detail.body || ""
                            }}/>
                        </div> : <div>読み込み中...</div>
                }


                <Section id="categoryList" title={detail.category_slug || ""} list={latestList}/>

            </div>
        );
    }

});


Article.propTypes = {};

/**
 * サーバーサイドの初期レンダリング用
 *
 * @param resolve
 * @param reject
 * @param ownProps
 * @returns {*}
 */
Article.fetchData = function (resolve, reject, ownProps) {
    const {params} = ownProps;
    console.log("Article fetchData");
    return fetchArticleDetail(params.postname, resolve);

};

const mapStateToProps = (state, ownProps) => {
    return {
        nowDetailLoading: state.nowDetailLoading,
        detail: state.detail,
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
const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);

export default ArticleContainer;