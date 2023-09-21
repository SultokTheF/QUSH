import React from "react"
import { Routes, Route } from 'react-router-dom';

//pages
import AddFieldPage from './LANDLORD/AddFieldPage';
import EditFieldPage from "./LANDLORD/EditFieldPage";
import MyFieldsPage from "./LANDLORD/MyFieldsPage";
import LandLordProfilePage from "./LANDLORD/LandLordProfilePage";

const LandLordPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/add" element={ <AddFieldPage /> } />
        <Route path="/edit/:id" element={ <EditFieldPage /> } />
        <Route path="/fields" element={ <MyFieldsPage /> } />
        <Route path="/profile" element={ <LandLordProfilePage/> } />
      </Routes>
    </>
  );
}

export default LandLordPages;