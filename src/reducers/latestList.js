/**
 */
const latestList = (state = [], action)=> {
    switch (action.type) {
        case 'FETCH_ARTICLES_COMPLETE':
            let newState = action.data || [];
            console.log(newState);
            if (action.data == null) {
                return [];
            }
            return newState;
        default:
            return state;
    }
};

export default latestList;