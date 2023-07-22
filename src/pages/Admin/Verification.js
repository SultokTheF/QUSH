import React, { useEffect, useState } from 'react';

import accept from '../../assets/images/icons/accept.png';
import decline from '../../assets/images/icons/decline.png';

export default function Verification() {
    const [ver, setVer] = useState( null );

    const handleAccept = async ( e ) => {
        let id = e.target.value;

        try {
            const res = await fetch( `http://127.0.0.1:8002/verification/accept/${id}/`);
            if( res.status === 200 ) {
                window.location.reload( false );
            }
        } catch( err ) {
            console.log( err )
        }
    }

    const handleDecline = async ( e ) => {
        let id = e.target.value;

        try {
            const res = await fetch( `http://127.0.0.1:8002/verification/decline/${id}/`);
            if( res.status === 200 ) {
                window.location.reload( false );
            }
        } catch( err ) {
            console.log( err )
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch( 'http://127.0.0.1:8002/verification/fields-ver/' );
                const data = await response.json();
                const foundVers = data.data.filter( ver => ver.status === 3 );

                setVer( foundVers );
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
                    <table className="table text-center mt-5">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Форма запроса</th>
                                <th scope="col">Действия</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ver && ver.map( ( v, index ) => (
                                <tr key={v.id} id={v.id}>
                                    <td>{index+1}</td>
                                    <td>
                                        <a href='/profile/1'>
                                            Криштиану Роналду
                                        </a>
                                    </td>
                                    <td>{v.name}</td>
                                    <td>
                                    <div className='actions'>
                                        <button className='btn' value={v.id} onClick={handleAccept}><img src={accept} width={40}/></button>
                                        <button className='btn' value={v.id} onClick={handleDecline}><img src={decline} width={40}/></button>
                                    </div>
                                </td>
                                </tr>
                            ) )}
                        </tbody>
                    </table>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}
