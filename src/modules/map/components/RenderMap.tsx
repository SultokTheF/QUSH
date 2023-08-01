import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";

import { mapBoxAccessToken } from '../store/constants';

import '../assets/Map.css';

mapboxgl.accessToken = mapBoxAccessToken;

const RenderMap: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(71.4306682);
  const [lat, setLat] = useState(51.1282205);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });
  }, [lng, lat, zoom]);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}

export default RenderMap;