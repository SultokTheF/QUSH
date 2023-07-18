import React, { Component } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import axios from 'axios';

import Navbar from './components/Navbar';

import Login from './pages/Fields/Login';
import Register from './pages/Fields/Register';
import ObjectsPage from './pages/Objects/ObjectsPage';
import ObjectPage from './pages/Objects/ObjectPage';

import AddField from './pages/Fields/AddField';
import EditField from './pages/Fields/EditField';

import Rents from './pages/User/Rents';

import About from './pages/About';
import Main from './pages/Main';
import Profile from './pages/User/Profile';

import Calendar from './pages/Objects/Rent';

import './css/main.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     role: null, // Инициализация роли со значением null
  //     isLoggedIn: false // Флаг для определения, авторизован ли пользователь
  //   };
  // }

  // componentDidMount() {
  //   this.checkToken();
  // }

  // async checkToken() {
  //   const token = localStorage.getItem('token');
    
  //   const excludedRoutes = ['/login', '/register']; // Маршруты, для которых не требуется проверка токена

  //   // Проверить, является ли текущий маршрут исключенным
  //   const isExcludedRoute = excludedRoutes.includes(window.location.pathname);
  //   if (!token && !isExcludedRoute) {
  //     // Токен отсутствует, выполните необходимые действия, например, перенаправление на страницу входа.
  //     // Например:
  //     window.location.href = '/login';
  //   } else {
  //     try {
  //       const response = await axios.post(`http://localhost:8082/auth/validate?token=${token}`);
  //       const { email, userId, role } = response.data;
  //       this.setState({ role, isLoggedIn: true }); // Сохраняем роль в состоянии компонента и устанавливаем флаг в true
  //     } catch (error) {
  //       console.error('Токен недействителен', error);
  //       return <Navigate to="/login" />
  //     }
  //   }
  // }

  render() {
    // const { role, isLoggedIn } = this.state;

    return (
      <>
        <Navbar/>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path='/object/:id/' element={<ObjectPage/>}/>
          <Route path='/objects' element={<ObjectsPage/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
          <Route path='/add' element={<AddField/>}/>
          <Route path='/edit/:id' element={<EditField/>}/>

          <Route path='/manage_rents/:id' element={<Rents/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>

          <Route path='/rent/:id' element={<Calendar/>}/>
        </Routes>

        {/* {isLoggedIn && role === 'ADMIN' && <h1>ADMIN ROLE</h1>}  */}
      </>
    );
  }
}
