import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Status from './Status';
import Checkbox from './Checkbox';

export default function Rent( props ) {
    const intToTime = ( timeInSec ) => {
        let minutes = timeInSec % 60;
        let hours = parseInt( timeInSec / 60 ).toString();
  
        if( parseInt( timeInSec / 60 ) < 10 ) {
            hours = "0" + hours;
        }
        
        if( timeInSec % 60 < 10 ) {
            minutes = "0" + minutes;
        }
  
        return hours + ":" + minutes;
    }

    const createTimeLine = ( timeFrom, timeTo ) => {
        let tickets = []
        let id = 1;

        for( let i = timeFrom; i < timeTo; i+= 60 ) {
            tickets.push(
                {
                    'id': id,
                    'time_from': intToTime( i ),
                    'time_to': intToTime( i + 60 )
                }
            )

            id++;
        }

        return tickets;
    }

    const  params = useParams();
    const fieldId = parseInt( params.id );

    const [field, setField] = useState( null );
    const [timeLine, setTimeLine] = useState( createTimeLine( 0, 1439 ) );
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://localhost:8000/field/fields' );
                const data = await response.json();
                const foundField = data.data.find( field => field.id === fieldId );

                setField( foundField );
                setTimeLine( createTimeLine( foundField.time_from, foundField.time_to ) );
            } catch ( error ) {
                console.error( 'Error fetching data:', error );
            }
        };

        fetchData();
    }, []);

    return (
        <div className='content'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className="greeting">
                        <h1>Здраствуйте [Имя пользователя] </h1>
                    </div>
                    <div className="row">
                        <div className='col-1'></div>
                        <div className='col-10 text-center'>
                            <h4>Вы можете выбрать удобное для вас время и арендовать у нас поле </h4>
                        </div>
                        <div className='col-1'></div>
                    </div>
                    
                    <table className="table text-center mt-5">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Время</th>
                                <th scope="col">Статус</th>
                                <th scope="col">Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeLine.map( time => (
                                <tr>
                                    <td> {time.id} </td>
                                    <td> {time.time_from} - {time.time_to} </td>
                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <Status status = {true} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='actions'>
                                            <Checkbox status = {time.available} />
                                        </div>
                                    </td>
                                </tr>
                            ) )}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> <button className='btn btn-outline-primary'>Арендовать</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    )
}
