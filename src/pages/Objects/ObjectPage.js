import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Spinner from '../../components/Spinner';

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

    const  params = useParams();
    const fieldId = parseInt( params.id );
    
    const [field, setField] = useState( null );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://localhost:8000/field/fields' );
                const data = await response.json();
                const foundField = data.data.find( field => field.id === fieldId );

                setField( foundField );
            } catch ( error ) {
                console.error( 'Error fetching data:', error );
            }
        };

        fetchData();
    }, []);

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
                        <strong className='text-color-blue'>Стоимость аренды:</strong> {field.price}
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

                        <a className='btn btn-outline-primary form-control' href='/time'>Аренда</a>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="field-image-container">
                        <div className="field-image-ratio">
                            <img src='https://fcastana.kz/img/stadion_g1.jpg' alt="Field" className="field-image" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      
    );
}
