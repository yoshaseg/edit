/**
 */
const nowDetailLoading = (state = false, action)=> {
    switch (action.type) {
        case 'FETCH_ARTICLE_DETAIL_REQUEST':
            return true;
        case 'FETCH_ARTICLE_DETAIL_COMPLETE':
            return false;
        default:
            return state;
    }
};

export default nowDetailLoading;