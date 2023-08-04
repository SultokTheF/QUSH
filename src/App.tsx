import React from "react";
import { Routes, Route } from 'react-router-dom';

//mobules
import Navbar from "./components/layouts/Navbar";

//pages
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import FieldListPage from "./pages/FieldListPage";
import FieldPage from "./pages/FieldPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
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

export default App;