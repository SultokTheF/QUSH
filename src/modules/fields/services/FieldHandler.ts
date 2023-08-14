import axios from 'axios';

import Field from '../../../types/Field';

const API_BASE_URL = 'http://83.229.87.19:8000/field/fields/'; // Replace with your API endpoint

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
    const response = await axios.put(`${API_BASE_URL}/${updatedField.id}/`, updatedField);
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

export default {
  createField,
  fetchFields,
  updateField,
  deleteField,
};
