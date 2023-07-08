import React from 'react'

import Hisroty from "../components/History";

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
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='objectContent'>
                        <div className='row'>
                            <div className='col-7 objDesc'>
                                <div className='mainText'>
                                    Спортивный комплекс САЙРАН. Школа футбола и мини футбола в Астане
                                </div>   
                            </div>
                            <div className='col-5 objImg'>
                                <img src='https://sxodim.com/uploads/images/2022/11/21/optimized/e1636aa8e4060e4f35f988ec21123cd8_800xauto-q-85.jpg' width={300} height={400}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Hisroty {...objs} />
        </div>
    )
}
