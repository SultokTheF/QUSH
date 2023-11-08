import React from "react";

import { Home, About, Footer } from '../../modules/product';

const MainPage: React.FC = () => {
  return (
    <>
      <Home/>
      <About/>
      <Footer/>
    </>
  );
}

export default MainPage;