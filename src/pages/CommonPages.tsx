import React from "react";
import { Routes, Route } from 'react-router-dom';

//pages
import MainPage from "../pages/COMMON/MainPage";
import FieldListPage from "../pages/COMMON/FieldListPage";
import RegisterPage from "../pages/COMMON/RegisterPage";
import LoginPage from "../pages/COMMON/LoginPage";

const CommonPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/field" element={<FieldListPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default CommonPages;