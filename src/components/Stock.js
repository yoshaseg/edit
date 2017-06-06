import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';
import styles from './stock.scss';

/**
 * Stock
 */
const Stock = CreateClass({
    render()
    {
        let _pow = Math.pow(10, 2);

        const {companyName, currency, pricing, percent} = this.props;

        return (
            <div className={styles.stock}>
                <div className={styles.companyName}>{companyName}</div>
                <div>
                    <p>
                        <strong>{Math.round((Math.random() * 1000) * _pow) / _pow }</strong><span
                        className={styles.currency}>{currency}</span>
                    </p>
                    <p><span
                        className={parseInt(pricing) > 0 ? styles.increase : styles.decrease}>{parseInt(pricing) > 0 ? "↑" : "↓"}{pricing}
                        ({percent})</span></p>
                </div>
            </div>
        )
    }
});

Stock.defaultProps = {
};

Stock.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const StockContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stock);

export default StockContainer;
