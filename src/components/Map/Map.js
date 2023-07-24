import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VsdG9rIiwiYSI6ImNsZGlwZG1iZTBjMmYzdW55cTdlbDFweGsifQ.DXleX4LGMMyjPlgEBAsHZA';

export default function Map( props ) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState( 71.4306682 );
    const [lat, setLat] = useState( 51.1282205 );
    const [zoom, setZoom] = useState(14);
    
    const [fields, setFields] = useState( [] );

    const [draggableMarkerCoords, setDraggableMarkerCoords] = useState({
        longitude: 71.4206682,
        latitude: 51.1482205,
    });

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
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });

        // map.current.on('click', (event) => {
        //     const { lng, lat } = event.lngLat;
    
        //     // Store the clicked coordinates in the array
        //     setCoordinates( { longitude: lng, latitude: lat } );
        // });
        if( props.addDraggableMarker ) {
            const marker = new mapboxgl.Marker({
                draggable: true, // Set the marker to be draggable
              })
                .setLngLat([draggableMarkerCoords.longitude, draggableMarkerCoords.latitude]) // Set the initial marker position
                .addTo(map.current);
    
            marker.on('dragend', (event) => {
                const { lng, lat } = event.target.getLngLat();
                setDraggableMarkerCoords({ longitude: lng, latitude: lat });
            });
        }
    });

    if( props.addMarkers ) {
        fields.forEach((field) => {
            const el = document.createElement('div');
            el.id = 'marker';
    
            const marker = new mapboxgl.Marker().setLngLat([field.longitude, field.latitude]).addTo(map.current);
        });
    }
    
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
            <div ref={mapContainer} className="map-container"/>
        </div>
    );
}
