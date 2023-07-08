import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const [firstName, setFirstName] = useState('Криштиану');
  const [lastName, setLastName] = useState('Роналду');
  const [email, setEmail] = useState('cristiano@siu.com');
  const [password, setPassword] = useState('123456');
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhotoChange = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="profile-container">
      <Container>
        <h1>Профиль</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="firstName" style={{ marginBottom: '15px' }}>
                <Form.Label>Имя</Form.Label>
                {editMode ? (
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                ) : (
                  <Form.Control type="text" value={firstName} disabled />
                )}
              </Form.Group>

              <Form.Group controlId="lastName" style={{ marginBottom: '15px' }}>
                <Form.Label>Фамилия</Form.Label>
                {editMode ? (
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                ) : (
                  <Form.Control type="text" value={lastName} disabled />
                )}
              </Form.Group>

              <Form.Group controlId="email" style={{ marginBottom: '15px' }}>
                <Form.Label>Почта</Form.Label>
                {editMode ? (
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <Form.Control type="email" value={email} disabled />
                )}
              </Form.Group>

              <Form.Group controlId="password" style={{ marginBottom: '15px' }}>
                <Form.Label>Password</Form.Label>
                {editMode ? (
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                ) : (
                  <Form.Control type="password" value={password} disabled />
                )}
              </Form.Group>
              {editMode && (
                <>
                  <Form.Group controlId="showPassword" style={{ marginBottom: '15px' }}>
                    <Form.Check
                      type="checkbox"
                      label="Show Password"
                      checked={showPassword}
                      onChange={handlePasswordVisibility}
                    />
                  </Form.Group>
                  <Form.Group controlId="changePhoto" style={{ marginBottom: '15px' }}>
                    <Button variant="secondary" onClick={handlePhotoChange}>
                      Change Photo
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </Form.Group>
                </>
              )}

              {editMode ? (
                <Button variant="primary" onClick={handleSave}>
                  Save Changes
                </Button>
              ) : (
                <Button variant="primary" onClick={handleEdit}>
                  Edit
                </Button>
              )}
            </Form>
          </Col>
          <Col md={2}></Col>
          <Col md={4} className="text-center">
            <div className="avatar-container">
              <img
                src="https://competitions.teamtalk.com/image-library/square/1000/7/720dc00ad557-teamtalk-com.jpg"
                alt="User Avatar"
                className="avatar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
