import React, { useEffect, useState } from 'react';

import History from "../../components/Calendar";
import { useParams } from 'react-router-dom';

export default function ObjectPage( {} ) {
    const  params = useParams();
    const fieldId = parseInt( params.id );
    
    const [field, setField] = useState( null );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/field/fields');
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
        return <div className='content'>Loading...</div>; // Render loading state
    }

    return (
        <div className='content'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='objectContent'>
                        <div className='row'>
                            <div className='col-7 objDesc'>
                                <div className='mainText'>{field.description}</div>
                            </div>
                            <div className='col-5 objImg'>
                                <img
                                    src='https://sxodim.com/uploads/images/2022/11/21/optimized/e1636aa8e4060e4f35f988ec21123cd8_800xauto-q-85.jpg'
                                    width={300}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <History {...field} />
        </div>
    );
}
