/**
 */
const testList = (state = [
    {
        title: "テスト記事１"
    },
    {
        title: "テスト記事２"
    }
], action)=> {
    switch (action.type) {
        default:
            return state;
    }
};

export default testList;