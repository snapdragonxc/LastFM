import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//
const Header = () => {
    return (
         <nav className="uk-container uk-container-small">
            <div className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <Link to="/" className="uk-navbar-item uk-logo">LastFM</Link>
                </div>
            </div>
        </nav>
    );
}
export default Header;
