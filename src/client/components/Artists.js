import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtists, getArtist } from '../actions/actions';
//
class Artists extends Component {
    constructor(props){
        super(props);
        var params = props.location.pathname.split('\/');
        this.country = decodeURI(params[2]);
        this.page = params[3];
        this.page = (typeof this.page === 'undefined') ? 1 : parseInt(this.page);
        this.minPage = 1;
        this.maxPage = 1;
        this.canDraw = false;
        // Add Listen function to monitor Browser Buttons
        this.unlisten = this.props.history.listen((location, action) => { 
            if( action === 'POP' ){
                var params = location.pathname.split('\/');
                this.country = decodeURI(params[2]);
                this.page = params[3];
                this.page = (typeof this.page === 'undefined') ? 1 : parseInt(this.page);
                this.props.getArtists(this.country, this.page);
            }
        }); 
    }
    componentWillUnmount(){
        this.unlisten();
    }
    componentDidMount(){
        this.canDraw = false;
        this.props.getArtists(this.country, this.page);
    }
    componentWillReceiveProps(nextProps) {
        this.canDraw = true;
    }
    getPagingRange(current, {min = 1, total = 2000, length = 10} = {}) {
        if (length > total) 
            length = total;
        let start = current - Math.floor(length / 2);
        start = Math.max(start, min);
        start = Math.min(start, min + total - length);
        return Array.from({length: length}, (el, i) => start + i);
    }
    decrement(event){      
        if(this.page == this.minPage)
            return;
        this.page = this.page - 1;
        this.props.getArtists(this.country, this.page);
        var url = "/artists/" + this.country + "/" + this.page;
        this.props.history.push(url); 
    }
    increment(event){
        if(this.page == this.maxPage)
            return;
        this.page = this.page + 1;
        this.props.getArtists(this.country, this.page);
        var url = "/artists/" + this.country + "/" + this.page;
        this.props.history.push(url);     
    }
    handleArtist(name){
        var url = "/artist/" + name + "/1";
        this.props.history.push(url);  
    }
    renderArtists(){
        var artists = []; 
        if( this.props.artists.topartists != undefined ){
            // api somes times returned more than five? Limit to five.
            artists = this.props.artists.topartists.artist.slice(0, 5); 
        } else {
            artists = [];
        }   
        if(this.canDraw) {    
            return artists.map( (artist, index) => {
                return (
                    <li key={index}><h5>{artist.name}</h5>
                        <a onClick={ () => this.handleArtist(artist.name)} className="artists-thbImage">
                            <img src={ artist.image[1]['#text'] } width="100" alt=""/>
                        </a>
                    </li>
                );
            });
        } else {
            return <div>...Loading</div>;
        }
    }
    onClickPage(event, page){
        this.page = page;
        this.props.getArtists(this.country, this.page);
        var url = "/artists/" + this.country + "/" + this.page;
        this.props.history.push(url); 
    }
    render(){
        var curPage = this.page;
        if( this.props.artists.topartists != undefined ){
            this.maxPage = this.props.artists.topartists['\@attr'].totalPages;
        }
        var that = this;
        var pages = this.getPagingRange(curPage, { total: this.maxPage }).map(function(page, index){
            return(
                 <li key={ index } ><a className={ (curPage  === page )? 'uk-active' : '' }
                       onClick={ (event) => that.onClickPage(event, page) } > { page } </a></li> 
            )
        });
        // handle api error messages
        if( (this.props.artists.error != undefined) && (this.canDraw) ){

            return (
                <div className="uk-container uk-container-small">
                    <div className="error-message">
                        <p>...{this.props.artists.message}</p>
                    </div>
                </div>
            );
        }
        // handle zero pages 
        if( (this.props.artists.topartists != undefined) && (this.maxPage == 0) ){

            return (
                <div className="uk-container uk-container-small">
                    <div className="error-message">
                        <p>... not available</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="uk-container uk-container-small">  
                <div className="artists">          
                    <h3>Top artists of <span className="artists-country">{this.country}</span></h3>
                    <ul className="artists-list">
                        {this.renderArtists()}
                    </ul>
                    <ul className="uk-pagination">
                        <li><a onClick={ (event) => this.decrement(event) }><span>&lt;</span></a></li>
                            { pages } 
                        <li><a onClick={ (event) => this.increment(event) }><span>&gt;</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
function loadData(store, path){
    var params = path.split('\/');
    var country = decodeURI(params[2]);
    var page = params[3];
    page = (typeof page === 'undefined') ? 1 : parseInt(page);
    return store.dispatch(getArtists(country, page));
}
function mapStateToProps(state){
    return { 
        artists: state.artists,
    };
}
export default { 
    loadData: loadData,
    component: connect(mapStateToProps, { getArtists, getArtist })(Artists)
}