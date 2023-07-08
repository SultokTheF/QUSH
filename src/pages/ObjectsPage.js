import React from 'react';

import Object from '../components/Object';

export default function ObjectsPage() {
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
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                    </ul>
                </ul>
                <h2>Сайран Арена</h2>
                <ul>
                    Футбольные поля
                    <ul>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                    </ul>
                </ul>
                <h2>Сайран Арена</h2>
                <ul>
                    Футбольные поля
                    <ul>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                        <div className='objectList'>
                            <Object {...objectInfo}/>
                        </div>
                    </ul>
                </ul>
            </div>
        </div>
    )
}
