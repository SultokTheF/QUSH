import React from "react";
import { Routes, Route } from 'react-router-dom';

//mobules
import Navbar from "./components/layouts/Navbar";

//pages
import MainPage from "./pages/MainPage";
import FieldLocation from "./pages/FieldsLocation";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/map" element={<FieldLocation />} />
      </Routes>
    </>
  );
}

export default App;