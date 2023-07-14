import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ваша логика для отправки данных формы на сервер
    const formData = {
      email:email,
      password: password,
      firstName: firstName,
      lastName: lastName
  };

  fetch('http://localhost:8082/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response)
    .then(data => {
      // Обработка ответа от сервера
      console.log(data);
    })
    .catch(error => {
      // Обработка ошибок
      console.error(error);
    });
  }

  return (
    <div className="register-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <h1 className="text-center">Регистрация</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Имя"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Фамилия"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Почта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password" style={{ marginBottom: '15px' }}>
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Зарегистрироваться
              </Button>

              <p className="mt-3">
                Уже есть аккаунт? <a href="/login">Войти</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;