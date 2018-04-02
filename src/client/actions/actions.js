import axios from 'axios';
import config from '../../config.js'
//
export const getArtists = function(cur_country, cur_page){ 
    return async function(dispatch){
        var baseURL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists';
        var country = '&country=' + cur_country;
        var api_key = '&api_key=' + config.apiKey;
        var limit = '&limit=' + config.limit;
        var page = '&page=' + cur_page;
        var fmt = '&format=json';
        var url = baseURL + api_key + limit + fmt + country + page ;
        const res = await axios.get(url);
        dispatch({
            type: 'GET_ARTISTS',
            payload: res
        })
    }
}
export const getArtist = function(cur_artist, cur_page){ 
    return async function(dispatch){
        var baseURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks';
        var artist = '&artist=' + cur_artist;
        var api_key = '&api_key=' + config.apiKey;
        var limit = '&limit=' + config.limit;
        var page = '&page=' + cur_page;
        var fmt = '&format=json';
        var url = baseURL + api_key + limit + fmt + artist + page ;
        const res = await axios.get(url);
        dispatch({
            type: 'GET_ARTIST',
            payload: res
        })
    }
}