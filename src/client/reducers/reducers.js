import { combineReducers } from 'redux';
import artistsReducer from './artistsReducer';
import artistReducer from './artistReducer';
//
export default combineReducers({
    artists: artistsReducer,
    artist: artistReducer
});