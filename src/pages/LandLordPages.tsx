import React from "react"
import { Routes, Route } from 'react-router-dom';

//mobules
import LandLordNavbar from "../components/layouts/LandLordNavbar";

//pages
import AddFieldPage from './LANDLORD/AddFieldPage';

const LandLordPages: React.FC = () => {
  return (
    <>
      <LandLordNavbar/>
      <Routes>
        <Route path="/add" element={ <AddFieldPage /> } />
      </Routes>
    </>
  );
}

export default LandLordPages;