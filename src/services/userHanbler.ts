import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from "../types/User";

import { validate } from '../store/endpoints';

const API_BASE_URL = `${validate}${localStorage.getItem( 'token' )}`;

export const UserHandler = async (User: User): Promise<User> => {
  try {
    const response = await axios.post(API_BASE_URL, User);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default UserHandler;