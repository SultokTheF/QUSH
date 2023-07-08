import React from 'react';

import Navbar from './components/Navbar';

import ObjectPage from './pages/ObjectPage';
import ObjectsPage from './pages/ObjectsPage';
import Field from './components/Field';

export default function App() {
  return (
    <div>
      <Navbar/>
      {/* <ObjectPage/> */}
      {/* <ObjectsPage/> */}
      <Field/>
    </div>
  )
}
