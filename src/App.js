import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import ObjectsPage from './pages/ObjectsPage';
import ObjectPage from './pages/ObjectPage';
import Field from './pages/Field';

import './css/main.css';

export default class App extends Component {
  componentDidMount() {
    // Выполнять проверку токена при каждой загрузке компонента App
    this.checkToken();
  }

  checkToken() {
    // Получить токен из localstorage
    const token = localStorage.getItem('token');

    // Здесь вы можете выполнить проверку токена, например, отправив запрос на сервер для его проверки.
    // Если токен недействителен, выполните необходимые действия, например, перенаправление на страницу входа.
    // Пример:
    const excludedRoutes = ['/login', '/register']; // Маршруты, для которых не требуется проверка токена

    // Проверить, является ли текущий маршрут исключенным
    const isExcludedRoute = excludedRoutes.includes(window.location.pathname);

    if (!token && !isExcludedRoute) {
      // Токен отсутствует, выполните необходимые действия, например, перенаправление на страницу входа.
      // Например:
      window.location.href = '/login';
    }
  }

  render() {
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
      </>
    );
  }
}