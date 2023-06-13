import React from 'react';
import PropTypes from 'prop-types';
// import {Outlet, Link} from "react-router-dom";


const propTypes = {title: PropTypes.string.isRequired,
                   about: PropTypes.string.isRequired};

const defaultProps = {title: "Default Title",
                      about: "Reach-Us"};

/**
 * 
 */

const Navbar = (props) => {
    return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.color==='black'?'light':'dark'}`} >
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.color==='black'?'dark':'light'}`} href="home">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link text-${props.color==='black'?'dark':'light'}`} aria-current="page" href="home">Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${props.color==='black'?'dark':'light'}`} href="/about">{props.about}</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <div className="bg-selector">
            <button type="button" onClick={props.backGroundSelector} className="selector" value="black" id='black'></button>
            <button type="button" onClick={props.backGroundSelector} className="selector" value="white" id='white'></button>
            <button type="button" onClick={props.backGroundSelector} className="selector" value="pink" id='pink'></button>
            <button type="button" onClick={props.backGroundSelector} className="selector" value="grey" id='grey'></button>
          </div>
        </form>
      </div>
    </div>
  </nav>
  </>)
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;