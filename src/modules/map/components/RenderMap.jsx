import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";

import { addMarkerToMap } from '../helpers/AddMarker';
import { mapBoxAccessToken } from '../store/constants';

import '../assets/Map.css';

mapboxgl.accessToken = mapBoxAccessToken;

const RenderMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(71.4306682);
  const [lat, setLat] = useState(51.1282205);
  const [zoom, setZoom] = useState(15);


  const [fields, setFields] = useState( [] );

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch( 'http://localhost:8000/field/fields' );
            const data = await response.json();

            setFields( data.data );
        } catch ( error ) {
            console.error( 'Error fetching data:', error );
        }
    };

    fetchData();
}, []);

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


  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
    });
});


  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}

export default RenderMap;