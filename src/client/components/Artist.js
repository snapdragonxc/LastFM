import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtist  } from '../actions/actions';
//
class Artist extends Component {
    constructor(props){
        super(props);
        var params = props.location.pathname.split('\/');
        this.name = decodeURI(params[2]);
        this.page = params[3];
        this.page = (typeof this.page === 'undefined') ? 1 : parseInt(this.page);
        this.minPage = 1;
        this.maxPage = 1;
        this.canDraw = true; // This does not allow server-side render if set to false
        // Add Listen function to monitor Browser Buttons
        this.unlisten = this.props.history.listen((location, action) => { 
            if( action === 'POP' ){
                var params = location.pathname.split('\/');
                this.name = decodeURI(params[2]);
                this.page = params[3];
                this.page = (typeof this.page === 'undefined') ? 1 : parseInt(this.page);
                this.props.getArtist(this.name, this.page);
            }
        }); 
    }
    componentWillUnmount(){
        this.unlisten();
    }
    componentDidMount(){
        this.canDraw = false; 
        this.props.getArtist(this.name, this.page);
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
        this.props.getArtist(this.name, this.page);
        var url = "/artist/" + this.name + "/" + this.page;
        this.props.history.push(url); 
    }
    increment(event){
        if(this.page == this.maxPage)
            return;
        this.page = this.page + 1;
        this.props.getArtist(this.name, this.page);
        var url = "/artist/" + this.name + "/" + this.page;
        this.props.history.push(url);     
    }
    renderImage(){
        var src = ''; 
        if( this.props.artist.toptracks != undefined ){
            // api somes times returned more than five? Limit to five.
            src = this.props.artist.toptracks.track[0].image[3]['#text'] 
        } else {
            src = '';
        }   
        if(this.canDraw) {    
            return <img src={ src } width="300" alt="image not found"/>  
        } else {
            return <div></div>;
        }          
    }
    renderTracks(){
        var tracks = []; 
        if( this.props.artist.toptracks != undefined ){
            // api somes times returned more than five? Limit to five.
            tracks = this.props.artist.toptracks.track.slice(0, 5); 
        } else {
            tracks = [];
        }   
        if(this.canDraw) {    
            return tracks.map( (track, index) => {
                return (
                    <li key={index}><h4>{track.name}</h4>
                    </li>
                );
            });
        } else {
            return <div>...Loading</div>;
        } 
    }
    onClickPage(event, page){
        this.page = page;
        this.props.getArtist(this.name, this.page);
        var url = "/artist/" + this.name + "/" + this.page;
        this.props.history.push(url); 
    }
    render(){
        var curPage = this.page;
        if( this.props.artist.toptracks != undefined ){
            this.maxPage = this.props.artist.toptracks['\@attr'].totalPages;
        }
        var that = this;
        var pages = this.getPagingRange(curPage, { total: this.maxPage }).map(function(page, index){
            return(
                 <li key={ index } ><a className={ (curPage  === page )? 'uk-active' : '' }
                       onClick={ (event) => that.onClickPage(event, page) } > { page } </a></li> 
            )
        });
        // handle api error messages
        if( (this.props.artist.error != undefined) && (this.canDraw) ){
            return (
                <div className="uk-container uk-container-small">
                    <div className="error-message">
                        <p>...{this.props.artist.message}</p>
                    </div>
                </div>
            );
        }
        // handle zero pages 
        if( (this.props.artist.toptracks != undefined) && (this.maxPage == 0) ){
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
                <div className="artist">  
                    <h3>Top tracks of <span className="artist-name">{this.name}</span></h3>
                    <div className="artist-left">
                        {this.renderImage()}
                    </div>
                    <div className="artist-right">                               
                        <ul className="artist-list">
                            {this.renderTracks()}
                        </ul>  
                         <ul className="uk-pagination">
                            <li><a onClick={ (event) => this.decrement(event) }><span>&lt;</span></a></li>
                                { pages } 
                            <li><a onClick={ (event) => this.increment(event) }><span>&gt;</span></a></li>
                        </ul>
                    </div>
                    <div className="artist-footer">
                       
                    </div>
                                    
                </div>
            </div>
        );
    }
}
function loadData(store, path){
    var params = path.split('\/');
    var name = decodeURI(params[2]);
    var page = params[3];
    page = (typeof page === 'undefined') ? 1 : parseInt(page);
    return store.dispatch(getArtist(name, page)); 
}
function mapStateToProps(state){
    return { 
        artist: state.artist
    };
}
export default { 
    loadData: loadData, 
    component: connect(mapStateToProps, { getArtist })(Artist)
}
