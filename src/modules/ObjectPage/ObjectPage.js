import React, { useEffect,useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';

import Map from '../../components/Map/Map';

import Spinner from '../../UI/Spinner/Spinner';

export default function ObjectPage( {} ) {
    const categoryOptions = [
        { value: '1', text: 'Футбол' },
        { value: '2', text: 'Баскетбол' },
        { value: '3', text: 'Волейбол' },
    ];
  
    const surfaceOptions = [
        { value: '1', text: 'Газон' },
        { value: '2', text: 'Паркет' },
        { value: '3', text: 'ПВХ' },
    ];

    const [field, setField] = useState( null );
    
    const [timeFrom, setTimeFrom] = useState( '' );
    const [timeTo, setTimeTo] = useState( '' );

    const [isRentAvailable, setIsRentAvailable] = useState( true );

    const  params = useParams();
    const navigate = useNavigate();

    const fieldId = parseInt( params.id );

    const [draggableMarkerCoords, setDraggableMarkerCoords] = useState({
        longitude: 71.4306682,
        latitude: 51.1282205,
    });

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState( 71.4306682 );
    const [lat, setLat] = useState( 51.1282205 );
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (!mapContainer.current) return;
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

        const marker = new mapboxgl.Marker({
            draggable: true, // Set the marker to be draggable
          })
            .setLngLat([draggableMarkerCoords.longitude, draggableMarkerCoords.latitude]) // Set the initial marker position
            .addTo(map.current);

        marker.on('dragend', (event) => {
            const { lng, lat } = event.target.getLngLat();
            setDraggableMarkerCoords({ longitude: lng, latitude: lat });
        });
    });
    
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const createTickets = async ( e ) => {
        if( isRentAvailable ) {
            try {
                const res = await fetch( 'http://localhost:8000/field/create-tickets/' + timeFrom + '/' + timeTo + '/' + fieldId + '/', {
                    method : "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                } );
    
                if ( res.status === 200 ) {
                    window.location.reload( false );
                } else {
                    console.log( 'Failed to delete the field' );
                }
            } catch( err ) {
                console.log( err )
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://127.0.0.1:8001/rent/ticket/' );
                const data = await response.json();
                const foundRent = data.data.find( rent => rent.field_id === fieldId );

                if( foundRent ) {
                    setIsRentAvailable( false );
                }
            } catch ( error ) {
                console.error( 'Error fetching data:', error );
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://localhost:8000/field/fields' );
                const data = await response.json();
                const foundField = data.data.find( field => field.id === fieldId );

                setTimeFrom( foundField.time_from );
                setTimeTo( foundField.time_to );
                setField( foundField );
            } catch ( error ) {
                console.error( 'Error fetching data:', error );
            }
        };

        fetchData();
    }, []);

    const handleDelete = async ( e ) => {
        e.preventDefault();
        try {
            const res = await fetch( 'http://localhost:8000/field/fields/' + fieldId + '/', {
                method : "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            } );

            if ( res.status === 200 ) {
                navigate('/objects');
                window.location.reload( false);
            } else {
                console.log( 'Failed to delete the field' );
            }
        } catch( err ) {
            console.log( err )
        }
    }

    if ( !field ) {
        return (
            <Spinner/>
        ); // Render loading state
    }

    const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === field.category_sport )
    const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === field.surface_type )

    return (
        <div className='content'>
            <Container>
                <Row>
                    <Col md={6} className="text-md-start">
                        <h1 className="mb-4 display-4 text-color-black">{field.name}</h1>
                        <p className="mb-4 lead">{field.description}</p>
                        <p className="mb-2 h5">
                        <strong className='text-color-blue'>Адрес:</strong> {field.location}
                        </p>
                        <p className="mb-2 h5">
                        <strong className='text-color-blue'>Стоимость аренды:</strong> {field.price} тг/час
                        </p>
                        <p className="mb-2 h5">
                        <strong className='text-color-blue'>Тип:</strong> {category.text}
                        </p>
                        <p className="mb-2 h5">
                        <strong className='text-color-blue'>Покрытие:</strong> {surface.text}
                        </p>
                        <p className="mb-2 h5">
                        <strong className='text-color-blue'>Размеры:</strong> {field.dimensions}
                        </p>

                        <Row className='mt-5'>
                            <Col md={4} className="text-md-end">
                                <button type="button" class="btn btn-outline-danger form-control p-2" data-bs-toggle="modal" data-bs-target="#delete_object">
                                    Удалить
                                </button>
                            </Col>
                            <Col md={4} className="text-md-end">
                                <a className='btn btn-outline-success form-control p-2' href={`/edit/${field.id}`}>Редактировать</a>
                                <a className='btn btn-outline-success form-control p-2' href={`/manage_rents/${field.id}`}>Заказы</a>
                            </Col>
                            <Col md={4} className="text-md-end">
                                {isRentAvailable && <button className='btn btn-outline-primary form-control p-2' onClick={createTickets}>Активировать</button>}
                                {!isRentAvailable && <a className='btn btn-outline-primary form-control p-2' href={`/rent/${field.id}`}>Аренда</a>}
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="field-image-container">
                            <div className="field-image-ratio">
                                <Map addMarkers/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            <div class="modal fade" id="delete_object" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Удаление объекта [<span className='text-primary'>{field.name}</span>]</h5>
                    </div>
                    <div class="modal-body">
                        Вы действительно хотите удалить объект <span className='text-primary'>{field.name}</span>?
                    </div>
                    <div class="modal-footer">
                        <button type="button" onClick={handleDelete} class="btn">Удалить</button>
                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Отмена</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
