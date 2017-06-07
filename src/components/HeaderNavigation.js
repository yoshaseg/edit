import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';
import Link from './LinkTo';
import styles from './header-navigation.scss';

/**
 * HeaderNavigation
 */
const HeaderNavigation = CreateClass({

        render() {
            const {detail} = this.props;

            let menu = [
                <Link to="/">HOME</Link>,
                <Link to="/brands">Brands</Link>,
                <Link to="/agencies">Agencies</Link>,
                <Link to="/publishers">Publishers</Link>,
                <Link to="/platforms">Platforms</Link>,
                <Link to="/career">Career</Link>,
                <Link to="/events">Events</Link>,
            ];

            let brandLink = typeof detail.category_slug != "undefined" ? "/" + detail.category_slug : "/";
            let brandLabel = typeof detail.category_slug != "undefined" ? detail.category_slug.toUpperCase() : "EDIT";

            return (
                <div className={styles.headerNav}>
                    <div className={styles.brand}>
                        <Link to={brandLink} onClick={() => {
                            window.scrollTo(0, 0);
                        }}>{brandLabel}</Link>
                    </div>
                    <div className={styles.navWrapper}>
                        <div className={styles.nav}>
                            <ul>
                                {
                                    menu.map((menuItem, i) => {
                                        return (
                                            <li key={"nav-" + i}>{menuItem}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    })
    ;

HeaderNavigation.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {
        detail: state.detail,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const HeaderNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderNavigation);

export default HeaderNavigationContainer;
