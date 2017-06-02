import React from 'react';
import CreateClass from 'create-react-class';
import {connect} from 'react-redux';
import {Link} from 'react-router';

/**
 * LinkTo
 */
const LinkTo = CreateClass({
    render()
    {
        return (
            <Link to={this.props.to} onClick={e => {
                window.scrollTo(0, 0);
            }}>{this.props.children}</Link>
        )
    }
});

LinkTo.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const LinkToContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkTo);

export default LinkToContainer;
