import React from 'react'

import Status from './Status';

import eye from '../static/images/icons/eye.png';
import pen from '../static/images/icons/pen.png';
import trash from '../static/images/icons/trash.png';

export default function History( props ) {
    const rows = 10;

    return (
        <div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <table className="table text-center">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Название</th>
                                <th scope="col">Категория</th>
                                <th scope="col">Цена аренды</th>
                                <th scope="col">Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {props.status} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {props.title} </td>
                                <td> {props.category} </td>
                                <td> {props.rentPrice}тг/час </td>
                                <td>
                                    <div className='statusRow'>
                                        <Status status = {true} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    )
}
