import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { intToTime } from '../../utils/timeConverter';

export default function Rents() {
    const [rents, setRents] = useState( null );

    const  params = useParams();
    const navigate = useNavigate();

    const fieldId = parseInt( params.id );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://127.0.0.1:8001/rent/rent/' );
                const data = await response.json();
                const foundRents = data.data.filter( rent => rent.field_id === fieldId );

                setRents( foundRents );
            } catch ( error ) {
                console.error( 'Error fetching data:', error );
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async ( e ) => {
        let rentId = e.target.value;
    
        try {
            const response = await fetch(`http://127.0.0.1:8001/rent/ticket-getback/${rentId}/`);

            if( response.status === 200 ) {
                e.preventDefault();
                try {
                    const res = await fetch( 'http://127.0.0.1:8001/rent/rent/' + rentId, {
                        method : "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    } );

                    if ( res.status === 200 ) {
                        // navigate('/objects');
                        window.location.reload( false);
                    } else {
                        console.log( 'Failed to delete the field' );
                    }
                } catch( err ) {
                    console.log( err )
                }
            }
        } catch ( error ) {
            console.log( error );
        }
    }

    return (
        <div className='content'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>    
                    <table className="table text-center mt-5">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Дата</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rents && rents.map( (rent, index) => (
                                <tr key={rent.id}>
                                    {!rent.is_rented && <>
                                        <td>{index+1}</td>
                                        <td>
                                            <a href='/profile/1'>
                                                Криштиану Роналду
                                            </a>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                {intToTime(rent.time_from)} - {intToTime(rent.time_to)}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='actions'>
                                                <div class="form-check form-switch d-flex justify-content-center">
                                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target={`#end_rent${rent.id}`}>
                                                        Закрыть заказ
                                                    </button>

                                                    <div class="modal fade" id={`end_rent${rent.id}`} tabindex="-1" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Завершение аренды [<span className='text-primary'>№{rent.id}</span>]</h5>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button className='btn' value={rent.id} onClick={handleSubmit}>Закрыть заказ</button>
                                                                <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Отмена</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}
