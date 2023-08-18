import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';

import Spinner from '../../../components/ui/Spinner';

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchFields } from '../../../services/FieldHandler';
import Field from '../../../types/Field';
import { intToTime } from '../../../helpers/timeConverter';
import { categoryOptions, surfaceOptions } from '../store/constants';

import { handleDelete, createTickets } from '../services/FieldActions';

import Validate from '../../../helpers/userValidation';

import '../assets/styles/FieldDetails.css';

export default function FieldDetails() {
  const userData = Validate();

  const [isRentAvailable, setIsRentAvailable] = useState( true );

  const params = useParams<{ id: string }>();
  const fieldId = Number( params.id );

  const [timeFrom, setTimeFrom] = useState( 0 );
  const [timeTo, setTimeTo] = useState( 0 );

  const [field, setField] = useState<Field>();
  
  useEffect(() => {
    if (userData) {
      fetchFieldList();
    }
  }, [userData]);

  const onDeleteClick = () => {
    if (window.confirm('Вы дейтвительно хотите удалить это поле?')) {
      handleDelete(fieldId);
    }
  };



  const [owner, setOwner] = useState( false );

  const fetchFieldList = async () => {
    try {
      const fieldsData = await fetchFields();
      const foundField = fieldsData.find( field => field.id === fieldId );
      setField(foundField);
      setTimeFrom( foundField?.time_from || 0 );
      setTimeTo( foundField?.time_to || 0 );

      if( userData?.userId == foundField?.owner_id ) {
        setOwner( true );
      }
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const onCreateTicketsClick = () => {
    if (window.confirm('Вы дейтвительно хотите удалить это поле?')) {
      createTickets( timeFrom, timeTo, fieldId, isRentAvailable );
    }
  };

  const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === field?.category_sport )
  const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === field?.surface_type )

  return (
    <section className='field-details'>
      { field? (
        <MDBContainer className="py-5 field-info">
          <MDBRow className='field-main'>
            <MDBCol lg="4">
              <MDBCard className="mb-4 field-card field-image">
                <MDBCardBody className="text-center">
                  { owner? (
                    <>
                      { isRentAvailable? (
                        <>
                          <div className="d-flex justify-content-center mb-2">
                            <button className='btn mt-3' onClick={onCreateTicketsClick}>Активировать</button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex justify-content-center mb-2">
                            <a className='btn mt-3' href={`/landlord/edit/${field.id}`}>Заказы</a>
                          </div>
                        </>
                      ) }
                      <div className="d-flex justify-content-center mb-2">
                        <button className='btn mt-3' onClick={onDeleteClick}>Удалить</button>
                      </div>
                      <div className="d-flex justify-content-center mb-2">
                        <a className='btn mt-3' href={`/landlord/edit/${field.id}`}>Редактировать</a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex justify-content-center mb-2">
                        <a className='btn mt-3' href='/rents/43'>Арендовать</a>
                      </div>
                    </>
                  ) }
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
                      <MDBCardText className="text-muted">{field.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Описание</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{field.description}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Адрес</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{field.location}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Размер поля</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{field.dimensions}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>График работы</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{intToTime( field.time_from )} - {intToTime( field.time_to )}</MDBCardText>
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
                      <MDBCardText className="text-muted">{field.price} тг/час</MDBCardText>
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