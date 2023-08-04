import React from "react";

import { RenderMap } from "../modules/map";

const MapPage: React.FC = () => {
  return (
    <>
      <div className="map">
        <RenderMap/>
      </div>
    </>
  );
};

export default MapPage;