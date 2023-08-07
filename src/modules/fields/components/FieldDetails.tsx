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
import icon from '../../../assets/images/icons/CV.jpg'

export default function FieldDetails() {
  return (
    <section className='field-details'>
      <MDBContainer className="py-5 field-info">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 field-card field-image">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="data:image/jpeg;base64,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"
                  alt="avatar"
                  style={{ width: '250px' }}
                  fluid />
                <div className="d-flex justify-content-center mb-2">
                  <a className='btn mt-3'>Редактировать</a>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <a className='btn mt-3'>Удалить поле</a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 field-card field-body">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Полное имя</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Куандык Султанияр</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">sultok.003@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Тел.номер</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">+7 707 109 8841</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Адрес</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Астана. Туран 56</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Адрес</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Астана. Туран 56</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Адрес</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Астана. Туран 56</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Статус</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Пользователь</MDBCardText>
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