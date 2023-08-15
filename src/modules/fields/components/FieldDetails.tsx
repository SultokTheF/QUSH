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
import { fetchFields } from '../services/FieldHandler';
import Field from '../../../types/Field';
import { intToTime } from '../../../helpers/timeConverter';
import { categoryOptions, surfaceOptions } from '../store/constants';

import '../assets/styles/FieldDetails.css';

export default function FieldDetails() {
  const params = useParams<{ id: string }>();
  const fieldId = Number( params.id );

  const [field, setField] = useState<Field>();
  
  useEffect(() => {
    fetchFieldList();
  }, []);

  const fetchFieldList = async () => {
    try {
      const fieldsData = await fetchFields();
      const foundField = fieldsData.find( field => field.id === fieldId );
      setField(foundField);
    } catch (error) {
      console.error('Error fetching fields:', error);
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
                  <MDBCardImage
                    src={field.image}
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
                      <MDBCardText>Услуги</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{field.facilities}</MDBCardText>
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