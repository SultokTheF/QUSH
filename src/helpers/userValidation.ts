import axios from "axios";
import React, { useEffect, useState } from 'react';

import User from "../types/User";

import { validate } from "../store/endpoints";

const Validate = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect( () => {
    if( !localStorage.getItem( "token" ) ) {
      alert( 'Вы не авторизованы' )
      window.location.replace( '/login' );
    } else {
      const token = localStorage.getItem( 'token' ); // Replace with your actual token
    
      axios.post(validate + token)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return userData;
}

export default Validate