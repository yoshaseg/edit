/**
 */
const detail = (state = {}, action)=> {

    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
        case 'FETCH_ARTICLE_DETAIL_REQUEST':
            return {};
        case 'FETCH_ARTICLE_DETAIL_COMPLETE':
            let newState = action.data || {};
            if (action.data == null) {
                return {};
            }
            return newState;
        default:
            return state;
    }
};

export default detail;