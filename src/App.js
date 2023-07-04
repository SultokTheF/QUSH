import React, { Component } from 'react';

import Navbar from './components/Navbar';

import ObjectPage from './pages/ObjectPage';
import ObjectsPage from './pages/ObjectsPage';

import './css/main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <ObjectsPage/> */}
      </div>
    )
  }
}
