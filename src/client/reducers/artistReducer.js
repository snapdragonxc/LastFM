export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ARTIST':
            return action.payload.data;
        default:
            return state;
    }
}