import React from "react";

import '../assets/styles/intro.css';

// Images 
import ImageGroup from '../assets/images/ImageGroup.png';

//modules
import Button from "../../../components/ui/Button";

const Intro: React.FC = () => {
  return (
    <>
      <div className="intro">
        <div className="intro-content">
          <h1> Quantitive Qualitative <br/> and Quick </h1>
          <div className="row mt-5">
            <div className="col-1"></div>
            <div className="col-10">
              <a href="/field"><Button body="Посмотреть поля"/></a>
            </div>
          </div>
        </div>
        <div className="intro-image-group">
          <img src={ImageGroup} className="image-group"/>
        </div>
      </div>
    </>
  );
}

export default Intro;