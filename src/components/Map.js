import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VsdG9rIiwiYSI6ImNsZGlwZG1iZTBjMmYzdW55cTdlbDFweGsifQ.DXleX4LGMMyjPlgEBAsHZA';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState( 71.4306682 );
    const [lat, setLat] = useState( 51.1282205 );
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        }).addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true,
        }));

        const marker = new mapboxgl.Marker()
        .setLngLat([71.4306682, 51.1282205])
        .addTo(map.current);
    });
    
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div ref={mapContainer} className="map-container" />
                </div>
            </div>
        </div>
    );
}
