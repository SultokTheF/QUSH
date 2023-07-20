import React, { useEffect,useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

import Map from '../../components/Map';

export default function AddField() {
    const navigate = useNavigate();

    const [name, setName] = useState( '' );
    const [location, setLocation] = useState( '' );
    const [timeFrom, setTimeFrom] = useState( '' );
    const [timeTo, setTimeTo] = useState( '' );
    const [price, setPrice] = useState( '' );
    const [description, setDescription] = useState( '' );
    const [dimension, setDimension] = useState( '' );

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

    const categoryOptions = [
        { value: '1', text: 'Футбол' },
        { value: '2', text: 'Баскетбол' },
        { value: '3', text: 'Волейбол' },
    ];

    const [category, setCategory] = useState( categoryOptions[0].value );

    const surfaceOptions = [
        { value: '1', text: 'Газон' },
        { value: '2', text: 'Паркет' },
        { value: '3', text: 'ПВХ' },
    ];

    const [surface, setSurface] = useState( surfaceOptions[0].value );

    const timeToInt = ( time ) => {
        const hours = time[0] + time[1];
        const minutes = time[3] + time[4];

        return parseInt( hours ) * 60 + parseInt( minutes );
    }
 
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try {
            const res = await fetch( 'http://127.0.0.1:8000/field/fields/', {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    owner_id: 1,
                    name: name,
                    category_sport: parseInt( category ),
                    location: location,
                    longitude: draggableMarkerCoords.longitude,
                    latitude: draggableMarkerCoords.latitude,
                    time_from: timeToInt( timeFrom ),
                    time_to: timeToInt( timeTo ),
                    description: description,
                    price: price,
                    image: null,
                    dimensions: dimension,
                    surface_type: parseInt( surface ),
                    capacity: null,
                    facilities: null,
                    lighting: null,
                    rules: null
                } ),
            } );
            if( res.status === 200 ) {
                navigate('/objects');
            }
        } catch( err ) {
            console.log( timeFrom );
            console.log( err )
        }
    }

    return (
        <div className='content'>
            <div className='row mt-5'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <h1>Основаная информация</h1>
                </div>
                <div className='col-1'></div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className='row mt-3'>
                    <div className='col-1'></div>
                    <div className='col-6'>
                        <div className='form-control'>
                        <h3>Общяя информация</h3>
                            <label className='mt-2'>Название</label>
                            <input 
                                type='text'
                                className='form-control'
                                placeholder='Введите название поля' 
                                value={name}
                                onChange={(e) => setName( e.target.value )}
                                required
                            />
                            
                            <label className='mt-2'>Описание</label>
                            <textarea
                                className='form-control'
                                placeholder='Введите описание поля'
                                value={description}
                                onChange={(e) => setDescription( e.target.value )}
                                required
                            />

                            <label className='mt-2'>Адрес</label>
                            {/* <div className='form-control'> */}
                                <input 
                                    type='text'
                                    className='form-control' 
                                    placeholder='Введите адрес поля' 
                                    value={location}
                                    onChange={(e) => setLocation( e.target.value )}
                                    required
                                />
                                <label className='mt-2'>Локация</label><br/>
                                Долгота: {draggableMarkerCoords.longitude} Широта: {draggableMarkerCoords.latitude}
                                
                                <div ref={mapContainer} className="map-container"/>
                            {/* </div> */}

                            <label className='mt-2'>Цена аренды</label>
                            <input 
                                type='number'
                                className='form-control' 
                                placeholder='Стоимость аренды в час (в тенге)' 
                                value={price}
                                onChange={(e) => setPrice( e.target.value )}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='form-control'>
                            <h3>Категория</h3>
                            <label className='mt-2'>Тип поля</label>
                            <select value={category} onChange={(e) => setCategory( e.target.value )} className='form-select'>
                                {categoryOptions.map( option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ) )}
                            </select>
                            
                            <label className='mt-2'>Покрытие</label>
                            <select value={surface} onChange={(e) => setSurface( e.target.value )} className='form-select'>
                                {surfaceOptions.map( option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ) )}
                            </select>

                            <h3 className='mt-4'>График работы</h3>
                            <div className='row'>
                                <div className='col-6'>
                                    <input
                                        type='time'
                                        className='form-control'
                                        placeholder='Время начала'
                                        value={timeFrom}
                                        onChange={(e) => setTimeFrom( e.target.value )}
                                        required
                                    />
                                </div>
                                <div className='col-6'>
                                    <input
                                        type='time'
                                        className='form-control'
                                        placeholder='Время начала'
                                        value={timeTo}
                                        onChange={(e) => setTimeTo( e.target.value )}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5 mb-5'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <h1>Дополнительная информация</h1>
                        <div className='form-control'>
                        <h5 className='mt-2'>Размеры поля</h5>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Ширина и Длина поля'
                                value={dimension}
                                onChange={(e) => setDimension( e.target.value )}
                                required
                            />

                            <h5 className='mt-4'>Фотография поля</h5>
                            <input type='file' className='form-control'></input>

                            <h5 className='mt-4'>Дополнительные условия</h5>
                            <div class="form-check form-switch">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox"
                                />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Душ</label>
                            </div>
                            <div class="form-check form-switch">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox"
                                />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Раздевалка</label>
                            </div>
                            <div class="form-check form-switch">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox"
                                />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Hookah</label>
                            </div>


                            <h5 className='mt-4'>Комментарий</h5>
                            <textarea 
                                className='form-control' 
                                placeholder='Что бы вы еще хотели отметить про данный объект'        
                            />
                        </div>
                    </div>
                    <div className='col-1'></div>

                    <div className='row'>
                        <div className='col-10'></div>
                        <div className='col-2'>
                            <button type='submit' className='btn btn-outline-primary mt-3'>Добавить</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}