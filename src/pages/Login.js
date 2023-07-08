import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <h1 className='text-center' style={{ marginBottom: '15px' }}>Войти</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" style={{ marginBottom: '15px' }}>
                <Form.Label>Почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Введите почту"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password" style={{ marginBottom: '25px' }}>
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Войти
              </Button>

              <p className="mt-3">
                Нет аккаунта? <a href="/register">Зарегистрироваться</a>
              </p>

              <p>
                <a href="/forgot-password">Забыли пароль?</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
