import axios from 'axios';
import { useState, useEffect } from 'react';

  const createTickets = async (timeFrom: number, timeTo: number, fieldId: number,isRentAvailable:boolean) => {
    if (isRentAvailable) {
      try {
        const response = await axios.get(`http://83.229.87.19:8000/field/create-tickets/${timeFrom}/${timeTo}/${fieldId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        });
        if (response.status === 200) {
          alert( 'Поле успешно активировано' )
          window.location.reload();
        } else {
          console.log('Failed to create tickets');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

const handleDelete = async (fieldId: number) => {
  try {
    const res = await axios.delete(`http://83.229.87.19:8000/field/fields/${fieldId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
        'Content-Type': 'application/json', // Set the appropriate content type
      },
    });

    if (res.status === 200) {
      alert('Поле успешно удалено');
      window.location.replace('/landlord/fields');
    } else {
      console.log('Failed to delete the field');
    }
  } catch (err) {
    console.log(err);
  }
};

export { handleDelete, createTickets };
