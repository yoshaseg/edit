import React from 'react';
import CreateClass from 'create-react-class';
import {connect, Provider} from 'react-redux';
import Helmet from 'react-helmet';

const Html = CreateClass({

    componentDidMount: function () {
    },

    render: function () {
        const {markup, state, clientFile, store} = this.props;

        return (
            <Provider store={store}>
                <Helmet>
                    <html lang="en"/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Helmet>
                <html lang="ja">
                <head>
                    <meta charSet="utf-8"/>
                </head>
                <body>
                <div id="app" dangerouslySetInnerHTML={{__html: markup}}></div>
                <script dangerouslySetInnerHTML={{__html: state}}></script>
                <script src={'/public/' + clientFile}></script>
                </body>
                </html>
            </Provider>
        );
    }
});


Html.propTypes = {};

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

const HtmlContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Html);

export default HtmlContainer;