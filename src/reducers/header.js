/**
 */
const header = (state = {
    title: "EDIT"
}, action)=> {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                title: "EDIT"
            };
        case 'FETCH_ARTICLE_DETAIL_COMPLETE':
            return {
                title: action.data.title,
            };
        default:
            return state;
    }
};

export default header;