import React, { useEffect, useState } from "react";

import Object from '../../components/Object';

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

    return (
        <div className='content'>
            <div className="greeting">
                <h1>Здраствуйте [Имя пользователя] </h1>
            </div>
            <div className="row">
                <div className='col-2'></div>
                <div className='col-10'>
                    <h5>Здесь вы можете управлять своими объектами <a href="/addField">Добавить</a> | <a href="/editField">Редактировать</a> объект</h5>
                </div>
                <div className='col-2'></div>
            </div>
            <div className="row mt-5">
                <div className='col-2'></div>
                <div className='col-10'>
                    <h2>Футбольные поля</h2>
                    <ul>
                        <ul>
                            {fields.map( field => (
                                <div className="objectList" key={field.id}>
                                    <Object {...field}/>
                                </div>
                            ) )}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}
