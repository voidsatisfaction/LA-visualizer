import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './style.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="vertical-menu">
        <NavLink exact to="/" activeClassName="active item">
          <Icon className="item-icon" name="home" size="large" />
          <span className="item-text" >ホーム</span>
        </NavLink>
        <NavLink to="/page2">
          <Icon className="item-icon" name="tasks" size="large" />
          <span className="item-text" >タスク</span>
        </NavLink>
        <NavLink to="#">Link2</NavLink>
        <NavLink to="#">Link3</NavLink>
        <NavLink to="#">Link4</NavLink>
      </div>
    );
  }
}