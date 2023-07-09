import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import ObjectsPage from './pages/ObjectsPage';
import ObjectPage from './pages/ObjectPage';
import Field from './pages/Field';

import './css/main.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ObjectsPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/object' element={<ObjectPage/>}/>
          <Route path='/field' element={<Field/>}/>
        </Routes>
      </>
    )
  }
}
