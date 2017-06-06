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

            let menu = [
                <Link to="/">HOME</Link>,
                <Link to="/brands">Brands</Link>,
                <Link to="/agencies">Agencies</Link>,
                <Link to="/publishers">Publishers</Link>,
                <Link to="/platforms">Platforms</Link>,
                <Link to="/career">Career</Link>,
                <Link to="/events">Events</Link>,
            ];

            return (
                <div className={styles.headerNav}>
                    <div className={styles.brand}>
                        <Link to="/" onClick={(e)=> {
                            window.scrollTo(0, 0);
                        }}>EDIT</Link>
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
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const HeaderNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderNavigation);

export default HeaderNavigationContainer;
