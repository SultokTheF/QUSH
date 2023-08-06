import React from "react"
import { Routes, Route } from 'react-router-dom';

//pages
import AddFieldPage from './LANDLORD/AddFieldPage';
import EditFieldPage from "./LANDLORD/EditFieldPage";

const LandLordPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/add" element={ <AddFieldPage /> } />
        <Route path="/edit" element={ <EditFieldPage /> } />
      </Routes>
    </>
  );
}

export default LandLordPages;