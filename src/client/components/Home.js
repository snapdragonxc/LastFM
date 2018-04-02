import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arr from './countries';
//
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            hintsArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSelect(index){
        this.setState({
            value: arr[index],
            hintsArray: []
        });       
    }
    handleSubmit(event) {
        var country = this.state.value;
        //<--- Validate country ---> ///
        country = arr.find( (elem) => {
            return (elem.toUpperCase() == country.toUpperCase());
        })

        if ( country == undefined ){
            alert('invalid country');
            this.setState({
                value: '',
                hintsArray: []
            });
            return;
        }
        var url = "/artists/" + country + "/1"; // always go to page '1' to prevent glitch if no page ... until fix
        this.props.history.push(url); 
        event.preventDefault();
    }
    handleChange(event) {
        var val = event.target.value;
        var hints = [];
        for (let i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                hints.push( 
                    <div key={ i } onClick={() => this.handleSelect(i)}>
                        <strong>{ arr[i].substr(0, val.length) }</strong>
                        {arr[i].substr(val.length)}
                    </div>
               );   
            }
        }
        if( val == ''){
            hints = [];
        }
        this.setState({
            value: event.target.value,
            hintsArray: hints
        });
    }
    render(){
        return (
            <div className="uk-container uk-container-small">
                <div className="home"> 
                    <h3>Top Artists</h3>                  
                    <p>Search by Country:</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="autocomplete" style={{ width: '300px' }}>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <input type="submit" value="Submit" />
                        <div className="autocomplete-items">
                            { this.state.hintsArray }  
                        </div>                  
                    </form>
                </div>
            </div>
        );
    }
}
export default {
    component: Home
}


