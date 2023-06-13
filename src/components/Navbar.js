import React from 'react';
import PropTypes from 'prop-types';
import {Outlet, Link} from "react-router-dom";


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
      <a className={`navbar-brand text-${props.color==='black'?'dark':'light'}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link text-${props.color==='black'?'dark':'light'}`} aria-current="page" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.color==='black'?'dark':'light'}`} to="about">{props.about}</Link>
          </li>
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle text-${props.color==='black'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Men</a></li>
              <li><a className="dropdown-item" href="/">Women</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Kids</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${props.color==='black'?'dark':'light'}`} href="/">SHOP</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
        {/* <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to {props.mode} Mode</label>
        </div> */}
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
  <Outlet/>
  </>)
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;