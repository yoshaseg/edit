import React from 'react';
import CreateClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from './LinkTo';
import {ArticleListShape} from '../shapes';

/**
 * Section
 */
const Section = CreateClass({
    render()
    {
        const {id, title, list} = this.props;
        let _list = [];
        for (var i = 0; i < 300; i++) {
            _list = _list.concat(list.map((item, idx) => {
                return (
                    <div key={id + "-" + i + "-" + idx}>
                        <Link to={item.href}>{item.title}</Link>
                        <small>
                            {item.pubDate}
                        </small>
                    </div>
                );
            }));
        }

        return (
            <section id={id}>
                {
                    title.length > 0 ? <h2>{title}</h2> : null
                }
                {_list}
            </section>
        )
    }
});

Section.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(ArticleListShape),
};

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const SectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Section);

export default SectionContainer;
