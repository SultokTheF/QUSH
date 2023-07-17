import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Status from '../../components/Status';
import Checkbox from '../../components/Checkbox';

export default function Rent( props ) {
    const  params = useParams();
    const fieldId = parseInt( params.id );

    const [rents, setRents] = useState( null );

    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (event, id) => {
        const { checked } = event.target;
        if (checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        }
    };

    const handleTicketChange = async ( e ) => {
        for( const id of selectedIds ) {
            try {
                const response = await fetch( `http://127.0.0.1:8001/rent/ticket-change/${id}` );

                if(response.ok) {
                    console.log(`API request successful for ID ${id}`);
                    // Do something with the successful response
                } else {
                    console.error(`API request failed for ID ${id}`);
                    // Handle error case
                } 
            } catch (error) {
                console.error(`Error occurred for ID ${id}:`, error);
                // Handle error case
            }
        }

        e.preventDefault();
        try {
            const res = await fetch( 'http://127.0.0.1:8001/rent/rent/', {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    client_id: 1,
                    field_id: fieldId,
                    num_tickets: selectedIds.length
                } ),
            } );
            if( res.status === 200 ) {
                alert( "doodosa" );
            }
        } catch( err ) {
            // console.log( timeFrom );
            console.log( err )
        }
    }

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://localhost:8001/rent/ticket/' );
                const data = await response.json();
                // alert( data.data[0].field_id );
                const foundRents = data.data.filter( rents => rents.field_id === fieldId );
                // alert( foundRents[0].field_id );
                setRents( foundRents );
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
                            {rents && rents.map( (rent, index) => (
                                <tr key={rent.id}>
                                    {!rent.is_rented && <>
                                        <td>{index+1}</td>
                                        <td>{intToTime(rent.time_from)} - {intToTime(rent.time_to)}</td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <Status status={rent.is_rented} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='actions'>
                                                <div class="form-check form-switch d-flex justify-content-center">
                                                    <input 
                                                        class="form-check-input" 
                                                        type="checkbox" 
                                                        checked={selectedIds.includes(rent.id)}
                                                        onChange={(event) => handleCheckboxChange(event, rent.id)}
                                                        />
                                                </div>
                                            </div>
                                        </td>
                                    </>}
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> <button onClick={handleTicketChange} className='btn btn-outline-primary'>Арендовать</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    )
}
