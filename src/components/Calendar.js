import React from 'react'

import Status from './Status';
import Checkbox from './Checkbox';

import eye from '../static/images/icons/eye.png';
import pen from '../static/images/icons/pen.png';
import trash from '../static/images/icons/trash.png';

export default function Hisroty( props ) {
    const hours = [
        {'id': 1, 'hour': '00:00', 'available': true},
        {'id': 2, 'hour': '01:00', 'available': false},
        {'id': 3, 'hour': '02:00', 'available': true},
        {'id': 4, 'hour': '03:00', 'available': true},
        {'id': 5, 'hour': '04:00', 'available': true},
        {'id': 6, 'hour': '05:00', 'available': true},
        {'id': 7, 'hour': '06:00', 'available': true},
        {'id': 8, 'hour': '07:00', 'available': true},
        {'id': 9, 'hour': '08:00', 'available': true},
        {'id': 10, 'hour': '09:00', 'available': true},
        {'id': 11, 'hour': '10:00', 'available': true},
        {'id': 12, 'hour': '11:00', 'available': true},
        {'id': 13, 'hour': '12:00', 'available': true},
        {'id': 14, 'hour': '13:00', 'available': true},
        {'id': 15, 'hour': '14:00', 'available': true},
        {'id': 16, 'hour': '15:00', 'available': true},
        {'id': 17, 'hour': '16:00', 'available': true},
        {'id': 18, 'hour': '17:00', 'available': true},
        {'id': 19, 'hour': '18:00', 'available': true},
        {'id': 20, 'hour': '19:00', 'available': true},
        {'id': 21, 'hour': '20:00', 'available': true},
        {'id': 22, 'hour': '21:00', 'available': true},
        {'id': 23, 'hour': '22:00', 'available': true},
        {'id': 24, 'hour': '23:00', 'available': true},
    ];

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
                            {hours.map( hour => (
                                <tr>
                                    <td> {hour.id} </td>
                                    <td> {hour.hour} </td>
                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <Status status = {hour.available} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='actions'>
                                            <Checkbox status = {hour.available} />
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
