import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';

// import Login from './pages/Fields/Login';
// import Register from './pages/Fields/Register';
import ObjectsPage from './pages/Objects/ObjectsPage';
import ObjectPage from './pages/Objects/ObjectPage';

import AddField from './pages/Fields/AddField';
import EditField from './pages/Fields/EditField';

import About from './pages/About';
import Main from './pages/Main';

import Calendar from './components/Calendar';

import './css/main.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path='/object/:id/' element={<ObjectPage/>}/>
          <Route path='/objects' element={<ObjectsPage/>}/>

          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/register' element={<Register/>}/> */}
          
          <Route path='/add' element={<AddField/>}/>
          <Route path='/edit/:id' element={<EditField/>}/>

          <Route path='/time' element={<Calendar/>}/>
        </Routes>
      </>
    )
  }
}
