import React from "react";

import { Navbar, Home, About, Footer } from '../modules/product/';

const MainPage: React.FC = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Footer/>
    </>
  );
}

export default MainPage;