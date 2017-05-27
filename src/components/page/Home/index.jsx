import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Icon } from 'semantic-ui-react';

import './style.css';

const MAX = 40;
const data = [];
for (var i = 1; i <= MAX; i++) {
  data.push({
    name: i,
    uv: Math.floor(Math.random() * 4000),
    pv: Math.floor(Math.random() * 4000) 
  });
}

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="chart home-chart">
          <h3 className="home-title">Bookroll 閲覧数</h3>
          <div className="home-title-sub">
            <Icon name="calendar" />2017.4.1 ~ 2017.5.22
          </div>
          <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>     
    );
  }
}