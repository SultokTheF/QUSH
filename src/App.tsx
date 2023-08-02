import React from "react";
import { Routes, Route } from 'react-router-dom';

//mobules
import Navbar from "./components/layouts/Navbar";

//pages
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import FieldListPage from "./pages/FieldListPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/field" element={<FieldListPage />} />
      </Routes>
    </>
  );
}

export default App;