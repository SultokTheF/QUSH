import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import ObjectsPage from './pages/ObjectsPage';
import ObjectPage from './pages/ObjectPage';
import Field from './pages/Field';
import axios from 'axios';

import './css/main.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: null, // Инициализация роли со значением null
      isLoggedIn: false // Флаг для определения, авторизован ли пользователь
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  async checkToken() {
    const token = localStorage.getItem('token');
    
    const excludedRoutes = ['/login', '/register']; // Маршруты, для которых не требуется проверка токена

    // Проверить, является ли текущий маршрут исключенным
    const isExcludedRoute = excludedRoutes.includes(window.location.pathname);
    if (!token && !isExcludedRoute) {
      // Токен отсутствует, выполните необходимые действия, например, перенаправление на страницу входа.
      // Например:
      window.location.href = '/login';
    } else {
      try {
        const response = await axios.post(`http://localhost:8082/auth/validate?token=${token}`);
        const { email, userId, role } = response.data;
        this.setState({ role, isLoggedIn: true }); // Сохраняем роль в состоянии компонента и устанавливаем флаг в true
      } catch (error) {
        console.error('Токен недействителен', error);
        return <Navigate to="/login" />
      }
    }

    

    
    
  }

  render() {
    const { role, isLoggedIn } = this.state; // Получаем роль и флаг из состояния компонента

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ObjectsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/object" element={<ObjectPage />} />
          <Route path="/field" element={<Field />} />
        </Routes>
        {isLoggedIn && role === 'ADMIN' && <h1>ADMIN ROLE</h1>} {/* Отображение элемента только для роли "ADMIN" и если пользователь авторизован */}
      </>
    );
  }
}
