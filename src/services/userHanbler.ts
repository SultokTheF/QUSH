import axios from "axios";
import User from "../types/User";

const API_BASE_URL = 'http://83.229.87.19:8090/auth/validate?token=';

export const createField = async (User: User): Promise<User> => {
  try {
    const token = localStorage.getItem( 'token' );

    if( !token ) {
      alert( "Пользовательский токен не найден" );
    }

    const response = await axios.post(`${API_BASE_URL}${token}`,);
    return response.data;
  } catch (error) {
    throw error;
  }
};