import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faHome, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () =>{
    return(
        <div className="header">
            <span className="home-movies-series">
                <Link to="/Home"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/Movies"><FontAwesomeIcon icon={faVideo} /></Link>
                <Link to="/Series"><FontAwesomeIcon icon={faTv} /></Link>
            </span>    
            <span className="search-button">
                <label for="site-search"></label>
                <button><FontAwesomeIcon icon={faSearch}/></button>
                <input placeholder="Search..." type="search" id="site-search" name="q"aria-label="Search through site content"></input>
            </span>
        </div>
    )
}

export default Header;