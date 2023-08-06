import React from "react"
import { Routes, Route } from 'react-router-dom';

//pages
import UserProfilePage from "./USER/UserProfilePage";

const LandLordPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={ <UserProfilePage /> } />
      </Routes>
    </>
  );
}

export default LandLordPages;