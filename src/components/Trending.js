import React from 'react';
import CreateClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from './LinkTo';
import Stock from './Stock';
import {ArticleListShape} from '../shapes';
import styles from './trending.scss';

/**
 * Trending
 */
const Trending = CreateClass({
    render()
    {
        const {id, title, list} = this.props;
        let _list = list.map((item, idx) => {
            return (
                <div key={id + "-" + idx}>
                    <time dateTime={item.pubDate}>{item.pubDate}</time>
                    <h2><Link to={item.href}>{item.title}</Link></h2>
                    <div style={{clear: "both"}}>
                        {
                            item.people.length > 0 ? <div className={styles.people}>
                                {
                                    item.people.map((person, idx)=> {
                                        return <img key={"personImg-" + idx} src={person} title="person name"/>;
                                    })
                                }
                            </div> : null
                        }
                        <Stock {...item.stock}/>
                    </div>
                </div>
            );
        });

        return (
            <section id={id} className={styles.trending}>
                <div className={styles.title}>{title}</div>
                <div className={styles.list}>
                    {_list}
                </div>
            </section>
        )
    }
});

Trending.defaultProps = {
    title: "Trending"
};

Trending.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(ArticleListShape),
};

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const TrendingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Trending);

export default TrendingContainer;
