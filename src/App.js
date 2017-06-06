import React from 'react';
import CreateClass from 'create-react-class';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import commonStyles from './common.scss';
import styles from './app.scss';
import HeaderNavigation from './components/HeaderNavigation';

const App = CreateClass({

    render() {
        const {children} = this.props;
        return (
            <div className={styles.wrapper}>
                <HeaderNavigation/>
                <div className={styles.text}>
                    {children}
                </div>
            </div>
        );
    }
});


App.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;