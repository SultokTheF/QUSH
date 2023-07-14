import React, { useEffect, useState } from "react";

import Object from '../../components/Object';
import Spinner from "../../components/Spinner";

export default function ObjectsPage() {
    const [fields, setFields] = useState( null );
    const [selectedCategory, setSelectedCategory] = useState(0);

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

    if ( !fields ) {
        return (
            <div className='content'>
                <div className="greeting">
                    <h1>Здраствуйте [Имя пользователя] </h1>
                </div>
                <div className="row">
                    <div className='col-1'></div>
                    <div className='col-10 text-center'>
                        <h4>Здесь вы можете <a href="/add">Добавить</a> | Посмотреть объекты</h4>
                    </div>
                    <div className='col-1'></div>
                </div>
                <Spinner/>
            </div>
        ); // Render loading state
    }

    return (
        <div className='content'>
            <div className="greeting">
                <h1>Здраствуйте [Имя пользователя] </h1>
            </div>
            <div className="row">
                <div className='col-1'></div>
                <div className='col-10 text-center '>
                    <h4>Здесь вы можете <a href="/add">Добавить</a> | Посмотреть объекты</h4>
                </div>
                <div className='col-1'></div>
            </div>
            <div className="row mt-5">
                <div className='col-2'></div>
                <div className='col-10'>
                    <h2>Спортивные поля</h2>
                    <strong className='text-color-blue m-2'>Выберите тип поля:</strong>
                    <select value={selectedCategory} onChange={event => setSelectedCategory(parseInt( event.target.value ))} className="mb-3">
                        <option value={0}>Все</option>
                        <option value={1}>Футбол</option>
                        <option value={2}>Баскетбол</option>
                        <option value={3}>Волейбол</option>
                    </select>
                    <ul>
                        <ul>
                        {fields
                            .filter(field => selectedCategory === 0 || field.category_sport === selectedCategory)
                            .map(field => (
                                <div className="objectList" key={field.id}>
                                <Object {...field}/>
                                </div>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}
