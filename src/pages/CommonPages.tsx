import React from "react";
import { Routes, Route } from 'react-router-dom';

//mobules
import CommonNavbar from "../components/layouts/DefaultNavbar";

//pages
import MainPage from "../pages/COMMON/MainPage";
import MapPage from "../pages/COMMON/MapPage";
import FieldListPage from "../pages/COMMON/FieldListPage";
import FieldPage from "../pages/COMMON/FieldPage";
import RegisterPage from "../pages/COMMON/RegisterPage";
import LoginPage from "../pages/COMMON/LoginPage";

const CommonPages: React.FC = () => {
  return (
    <>
      <CommonNavbar/>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/field" element={<FieldListPage />} />
        <Route path="/field/:id" element={<FieldPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default CommonPages;