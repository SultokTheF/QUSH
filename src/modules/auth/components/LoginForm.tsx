import React, { useState, useEffect } from 'react';
import '../assets/styles/auth.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


import { auth } from '../../../store/endpoints';

import axios from "axios";

const LoginForm: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(auth, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data);
        window.location.replace( "/" );
      } else {
        setError('Неправильный логин или пароль');
      }
    } catch (error) {
      setError('Произошла ошибка. Пожалуйста, повторите попытку позже.');
    }
  };

  return (
    <>
      <section className="auth">
        <div className="secContainer container">
          <h1 className="text-white"> Вход </h1>
          <form onSubmit={handleLogin}>
            <div className="authCard grid">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="locationDiv"
              >
                <label htmlFor="email">Эл.Почта</label>
                <input
                  type="email"
                  placeholder="qush@support.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2500"
                className="distDiv"
              >
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  placeholder="Ваш пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                data-aos="fade-left"
                data-aos-duration="3500"
                className="btn"
                type="submit"
              >
                Вход
              </button>
              {error && <p className="error">{error}</p>}
              <p>
                Еще нет аккаунта? <a href="/register">Регистрация</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
