import PropTypes from 'prop-types';


const ArticleListShape = PropTypes.shape({
    title: PropTypes.string,
    pubDate: PropTypes.string
});

export {ArticleListShape};