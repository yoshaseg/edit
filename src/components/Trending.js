import React from 'react';
import CreateClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from './LinkTo';
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
                    <Link to={item.href}>{item.title}</Link>
                    <small>
                        {item.pubDate}
                    </small>
                </div>
            );
        });

        return (
            <section id={id} className={styles.trending}>
                <h2>{title}</h2>
                {_list}
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
