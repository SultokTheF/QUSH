import React from "react";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/layouts/Navbar";

import CommonPages from "./pages/CommonPages";
import AdminPages from "./pages/AdminPages";
import LandLordPages from "./pages/LandLordPages";
import UserPages from './pages/UserPages'

import Rent from "./modules/rents/rents";

import MyFieldsPage from "./pages/LANDLORD/MyFieldsPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/*" element={ <CommonPages/>} />
        <Route path="admin/*" element={ <AdminPages/>} />
        <Route path="landlord/*" element={ <LandLordPages/>} />
        <Route path="user/*" element={ <UserPages/>} />
        <Route path="rents/:id" element={  < Rent />} />
      </Routes>
    </>
  );
}

export default App;