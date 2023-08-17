import React from "react";
import { Routes, Route } from 'react-router-dom';

// pages 
import VerificationPage from "./ADMIN/VerificationPage";
import VerificationDetailsPage from "./ADMIN/VerificationDetailsPage";

const AdminPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<VerificationPage />} />
        <Route path="verification/:id" element={<VerificationDetailsPage/>} />
      </Routes>
    </>
  );
}

export default AdminPages;