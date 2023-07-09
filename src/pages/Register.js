import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

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

              <Form.Group controlId="agreeToPolicy" style={{ marginBottom: '15px' }}>
                <Form.Check
                  type="checkbox"
                  label="I agree to the policy"
                  checked={agreeToPolicy}
                  onChange={(e) => setAgreeToPolicy(e.target.checked)}
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
