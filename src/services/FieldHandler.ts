import axios from 'axios';

import Field from '../types/Field';
import Verification from '../types/Verification';

const API_BASE_URL = 'http://83.229.87.19:8000/field/fields/'; // Replace with your API endpoint
const VER_BASE_URL = 'http://83.229.87.19:8001/verification/fields-ver/';

// Create a new field
export const createField = async (newField: Field): Promise<Field> => {
  try {
    const response = await axios.post(
      API_BASE_URL, 
      newField,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
          'Content-Type': 'application/json', // Set the appropriate content type
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Read all fields
export const fetchFields = async (): Promise<Field[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

// Update a field
export const updateField = async (updatedField: Field): Promise<Field> => {
  try {
    const response = await axios.patch(
        `${API_BASE_URL}${updatedField.id}/`,
        updatedField,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a field
export const deleteField = async (fieldId: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${fieldId}/`);
  } catch (error) {
    throw error;
  }
};

export const fetchVerification = async (): Promise<Verification[]> => {
  try {
    const response = await axios.get(VER_BASE_URL);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleVerification = async (fieldId: number): Promise<Verification[]> => {
  try {
    const response = await axios.get(`${VER_BASE_URL}/${fieldId}/`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const createVerification = async (newVerification: Verification): Promise<Verification> => {
  try {
    const response = await axios.post(
      VER_BASE_URL, 
      newVerification,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
          'Content-Type': 'application/json', // Set the appropriate content type
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const acceptVerification = async (): Promise<Verification[]> => {
  try {
    const response = await axios.get(VER_BASE_URL);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const declinetVerification = async (): Promise<Verification[]> => {
  try {
    const response = await axios.get(VER_BASE_URL);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};



export default {
  createField,
  fetchFields,
  updateField,
  deleteField,
};
