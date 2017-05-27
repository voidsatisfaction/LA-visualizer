import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="header-items">
          <li>
            <a href="#">
              <Icon className="header-icon" name="alarm" size="big"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="header-icon" name="comment outline" size="big"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="header-icon" name="setting" size="big"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="header-icon" name="search" size="big"/>  
            </a>
          </li>
        </ul>
        <div className="header-user">
          <img src={require("../../../assets/img/no-user.jpg")} alt="user"/>
        </div>
      </div>
    );
  }
}