import React from "react"
import { Routes, Route } from 'react-router-dom';

//pages
import UserProfilePage from "./USER/UserProfilePage";
import MyRents from "./USER/MyRents";

const LandLordPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={ <UserProfilePage /> } />
        <Route path="/rents" element={ <MyRents /> } />
      </Routes>
    </>
  );
}

export default LandLordPages;