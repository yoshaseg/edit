import React from 'react';
import CreateClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from './LinkTo';
import Stock from './Stock';
import {ArticleListShape} from '../shapes';
import styles from './section.scss';

/**
 * Section
 */
const Section = CreateClass({
    render() {
        let _pow = Math.pow(10, 2);

        const {id, title, list} = this.props;
        let _list = [];
        for (var i = 0; i < 5; i++) {
            _list = _list.concat(list.map((item, idx) => {
                return (
                    <div key={id + "-" + i + "-" + idx}>
                        <time dateTime={item.pubDate}>{item.pubDate}</time>
                        <span className={styles.author}>Taro Yamada +</span>
                        <h2><Link to={item.href}>{item.title}</Link></h2>
                        <div style={{clear: "both"}}>
                            {
                                item.people.length > 0 ? <div className={styles.people}>
                                    {
                                        item.people.map((person, idx)=> {
                                            return <img key={"personImg-"+idx} src={person} title="person name"/>;
                                        })
                                    }
                                </div> : null
                            }
                            <Stock {...item.stock}/>
                        </div>
                    </div>
                );
            }));
        }

        return (
            <section id={id}>
                {
                    title.length > 0 ? <div className={styles.title}>{title}</div> : null
                }
                <div className={styles.list}>
                    {_list}
                </div>
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
