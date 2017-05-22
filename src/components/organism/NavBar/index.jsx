import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="vertical-menu">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/page1">Link1</NavLink>
        <NavLink to="#">Link2</NavLink>
        <NavLink to="#">Link3</NavLink>
        <NavLink to="#">Link4</NavLink>
      </div>
    );
  }
}