export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ARTISTS':
            return action.payload.data;
        default:
            return state;
    }
}