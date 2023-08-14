import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from "../types/User";

const API_BASE_URL = `http://83.229.87.19:8090/auth/validate?token=${localStorage.getItem( 'token' )}`;

export const UserHandler = async (User: User): Promise<User> => {
  try {
    const response = await axios.post(API_BASE_URL, User);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default UserHandler;