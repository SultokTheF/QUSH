import React, { useState, useEffect } from 'react';
import '../assets/styles/auth.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { register } from '../../../store/endpoints';

import axios from 'axios';

const RegisterForm: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState("USER");
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Пароли не совпадают');
      return;
    }

    const formData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role
    };

    try {
      const response = await axios.post(register, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert( "Вы успешно зерегестрировались" );
        window.location.replace( '/login' );
      } else {
        setError('Ошибка входа. Пожалуйста, проверьте свои учетные данные.');
      }
    } catch (error) {
      setError('Произошла ошибка. Пожалуйста, повторите попытку позже.');
      console.error(error);
    }
  };

  return (
    <>
      <section className="auth">
        <div className="secContainer container">
          {/* <h1 className="text-white"> Регистрация </h1> */}
          <form onSubmit={handleRegister}>
            <div className="authCard grid">
              <h1>Регистрация</h1>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="locationDiv"
              >
                <label htmlFor="firstName">Имя</label>
                <input
                  type="text"
                  placeholder="Султанияр"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="locationDiv"
              >
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  placeholder="Куандык"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
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
              <div
                className="priceDiv"
              >
                <label htmlFor="passwordConfirmation">Подтверждение пароля</label>
                <input
                  type="password"
                  placeholder="Повторите ваш пароль"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                />
              </div>
              <div
                className="priceDiv"
              >
                <label htmlFor="role">С какой целью вы создаете аккаунт?</label>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="USER">Аренда полей</option>
                  <option value="MODERATOR">Сдача полей в аренду</option>
                </select>
              </div>
              <button
                className="btn"
                type="submit"
              >
                Регистрация
              </button>
              {error && <p className="error">{error}</p>}
              <p>
                Уже есть аккаунт? <a href="/login">Вход</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
