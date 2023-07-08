import React from 'react'

import Fields from "../components/UserFields";

export default function ObjectPage() {
    const objs = {
        title: 'Сайран',
        location: 'Туран 56',
        shedule: '10:00-22:00',
        rentPrice: 10000,
        category: 'Футбольный',
        status: false,
    }

    return (
        <div className='content'>
            <div className='row text-center'>
                <h1 className='display-3' style={{ marginBottom: '50px' }}>Спортивные поля</h1>
            </div>
            <Fields {...objs} />
        </div>
    )
}
