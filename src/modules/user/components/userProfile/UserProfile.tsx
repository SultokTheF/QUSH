import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

import './UserProfile.css';

import axios from 'axios';
import User from '../../../../types/User';

import Validate from '../../../../helpers/userValidation';

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect( () => {
    if( !localStorage.getItem( "token" ) ) {
      window.location.replace( '/location' );
    } else {
      const token = localStorage.getItem( 'token' ); // Replace with your actual token
    
      axios.post('http://83.229.87.19:8090/auth/validate?token=' + token)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <section className='user-profile'>
      <MDBContainer className="py-5 user-info">
        <MDBRow className='mt-5'>
          <MDBCol lg="12">
            <MDBCard className="mb-4 user-card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>{}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData?.firstName} {userData?.lastName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Пользовательский ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData?.userId}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData?.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Статус</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData?.role}</MDBCardText>
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


export default UserProfile;