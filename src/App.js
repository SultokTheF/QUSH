import React, { Component } from 'react';

import Navbar from './components/Navbar';

import ObjectPage from './pages/ObjectPage';
import ObjectsPage from './pages/ObjectsPage';
import Field from './components/Field';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import FieldList from './pages/FieldList';
import UserField from './pages/UserField';

import Api from './components/Api';

import './css/main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <ObjectsPage />
        {/* <UserField/> */}
        {/* <FieldList/> */}
        {/* <Api/> */}
      </div>
    )
  }
}
