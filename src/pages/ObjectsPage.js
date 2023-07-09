import React, { useEffect, useState } from "react";

import Object from '../components/Object';

export default function ObjectsPage() {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/field/fields');
            const data = await response.json();
            setFields(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    const objectInfo = {
        title: 'Сайран',
        location: 'Туран 56',
        shedule: '10:00-22:00',
        category: 'Футбольный',
        status: false,
    }

    return (
        <div className='row content'>
            <div className='greeting'>
                <h1>Welcome Sultok</h1>
            </div>
            <div className='col-2'></div>
            <div className='col-10'>
                <h2>Сайран Арена</h2>
                <ul>
                    Футбольные поля
                    <ul>
                        {/* <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div> */}

                        {fields.map( field => (
                            <div className="objectList" key={field.id}>
                                <Object {...field}/>
                            </div>
                        ) )}
                    </ul>
                </ul>
            </div>
        </div>
    )
}
