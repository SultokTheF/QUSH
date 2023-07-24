import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password
    };
    fetch('http://localhost:8082/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error('Ошибка: ' + response.status);
        }
      })
      .then(data => {
        localStorage.setItem('token', data);
        window.location.href = '/field';
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Войти</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Войти
          </button>

          <p className="mt-3">
            Нет аккаунта? <a href="/register">Зарегистрироваться</a>
          </p>

          <p>
            <a href="/forgot-password">Забыли пароль?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;