import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Icon } from 'semantic-ui-react';

import './style.css';

const data = [
      {name: 'A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'G', uv: 3490, pv: 4300, amt: 2100},
]

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-chart">
          <h1 className="home-title">Bookroll 閲覧数</h1>
          <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>     
    );
  }
}