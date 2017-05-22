import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <Link className="header-title-text" to="/">LA Visualizer</Link>
        </div>
        {/*<NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/page1/min" className="item">Page1</NavLink>
        <NavLink to="/page2" className="item">Page2</NavLink>
        <NavLink to="/me" className="item">Me</NavLink>
        <NavLink to="/login" className="item">Login</NavLink>
        <NavLink to="/search" className="item">Search</NavLink>*/}
      </div>
    );
  }
}