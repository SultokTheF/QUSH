import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FieldUser = () => {
  const field = {
    name: 'Astana Arena',
    description: 'Астана Арена — футбольный стадион в Астане, Казахстан. Стадион вмещает 30 000 человек и имеет раздвижную крышу. Он служит национальным стадионом для сборной Казахстана по футболу. Астана Арена - крупнейший стадион в стране, он был официально открыт 3 июля 2009 года',
    address: '123 Street, City',
    type: 'Football',
    surface: 'искуственное',
    width: '68 метров',
    length: '105 метров',
    imageUrl: 'https://fcastana.kz/img/stadion_g1.jpg',
  };

  return (
    <div className="field-user-container">
      <Container>
        <Row>
          <Col md={6} className="text-md-start">
            <h1 className="mb-4 display-4 text-color-blue">{field.name}</h1>
            <p className="mb-4 lead">{field.description}</p>
            <p className="mb-2 h5">
              <strong className='text-color-blue'>Адрес:</strong> {field.address}
            </p>
            <p className="mb-2 h5">
              <strong className='text-color-blue'>Тип:</strong> {field.type}
            </p>
            <p className="mb-2 h5">
              <strong className='text-color-blue'>Покрытие:</strong> {field.surface}
            </p>
            <p className="mb-2 h5">
              <strong className='text-color-blue'>Размеры:</strong> {field.width} x {field.length}
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="field-image-container">
              <div className="field-image-ratio">
                <img src={field.imageUrl} alt="Field" className="field-image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FieldUser;
