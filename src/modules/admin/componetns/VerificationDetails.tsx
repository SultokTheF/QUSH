import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

import Spinner from '../../../components/ui/Spinner';

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchVerification, getSingleVerification } from '../../../services/FieldHandler';
import Verification from '../../../types/Verification';
import { intToTime } from '../../../helpers/timeConverter';
import { categoryOptions, surfaceOptions } from '../../fields/store/constants';

import '../../fields/assets/styles/FieldDetails.css';

import Validate from '../../../helpers/adminValidation';

import axios from 'axios';

export default function VerificationDetails() {
  const params = useParams<{ id: string }>();
  const verificationId = Number( params.id );

  const adminData = Validate();

  const [verification, setVerifications] = useState<Verification>();
  
  useEffect(() => {
    fetchVerificationList();
  }, []);

  const fetchVerificationList = async () => {
    try {
      const verificationData = await fetchVerification();
      const response = await axios.get(`http://83.229.87.19:8001/verification/fields-ver//${verificationId}/`);
      setVerifications(response.data.data);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const handleAccept = async () => {
    if( window.confirm( "Вы дейстивтельно хотите Поддтвердить создание поля?" ) ) {
      try {
        const response = await axios.get( `http://83.229.87.19:8001/verification/accept/${verificationId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        } );
        
        if( response.status === 200 ) {
          alert( "Поле поддтверждено" );
          window.location.replace( '/admin' );
        }
      } catch (error) {
        throw error;
      }
    }
  };

  const handleDecline = async () => {
    if( window.confirm( "Вы дейстивтельно хотите отказать в создании поля?" ) ) {
      try {
        const response = await axios.get( `http://83.229.87.19:8001/verification/decline/${verificationId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        } );
  
        if( response.status === 200 ) {
          alert( "Отказано" );
          window.location.replace( '/admin' );
        }
      } catch (error) {
        throw error;
      }
    }
  };

  const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === verification?.category_sport )
  const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === verification?.surface_type )

  return (
    <section className='field-details'>
      { verification? (
        <MDBContainer className="py-5 field-info">
          <MDBRow className='field-main'>
            <MDBCol lg="4">
              <MDBCard className="mb-4 field-card field-image">
                <MDBCardBody className="text-center">
                  {/* <MDBCardImage
                    src={field.image}
                    alt="avatar"
                    style={{ width: '350px' }}
                    fluid /> */}
                  <div className="d-flex justify-content-center mb-2">
                    <button className='btn mt-3' onClick={handleAccept}>Принять</button>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                  <button className='btn mt-3' onClick={handleDecline}>Отказать</button>
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
                      <MDBCardText className="text-muted">{verification.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Описание</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{verification.description}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Адрес</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{verification.location}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Размер поля</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{verification.dimensions}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>График работы</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{intToTime( verification.time_from )} - {intToTime( verification.time_to )}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Тип поля</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{category?.text}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Покрытие</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{surface?.text}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> Цена</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{verification.price} тг/час</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        <Spinner/>
      ) }
    </section>
  );
}