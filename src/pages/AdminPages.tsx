import React from "react";
import { Routes, Route } from 'react-router-dom';

// pages 
import VerificationPage from "./ADMIN/VerificationPage";

const AdminPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<VerificationPage />} />
      </Routes>
    </>
  );
}

export default AdminPages;