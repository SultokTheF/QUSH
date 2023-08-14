import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

import '../assets/styles/FieldDetails.css';
// import icon from '../../../assets/images/icons/CV.jpg'

export default function FieldDetails() {
  return (
    <section className='field-details'>
      <MDBContainer className="py-5 field-info">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 field-card field-image">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="http://llf-ast.kz/images/0001_%D0%9A%D0%A3%D0%91%D0%9E%D0%9A_%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%98%D0%AF/5Q0A1759.JPG"
                  alt="avatar"
                  style={{ width: '350px' }}
                  fluid />
                <div className="d-flex justify-content-center mb-2">
                  <a className='btn mt-3' href='/rents/43'>Арендовать</a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 field-card field-body">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Название поля</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Сайран</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Описание</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Школа футбола Астана Школа мини футбола в Астане</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Адрес</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Астана, Казахстан, улица Достык, 9</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Услуги</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Душ, Шкафчики, Раздевалка</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>График работы</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">07:01 - 15:01</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}