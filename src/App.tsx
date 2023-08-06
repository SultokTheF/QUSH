import React from "react";
import { Routes, Route } from 'react-router-dom';

import CommonPages from "./pages/CommonPages";
import AdminPages from "./pages/AdminPages";
import LandLordPages from "./pages/LandLordPages";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={ <CommonPages/>} />
        <Route path="admin/*" element={ <AdminPages/>} />
        <Route path="landlord/*" element={ <LandLordPages/>} />
      </Routes>
    </>
  );
}

export default App;