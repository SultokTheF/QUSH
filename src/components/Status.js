import React from 'react';

export default function Status( props ) {
    if( !props.status ) {
        return (
            <div className='statusTrue'>
                Свободен
            </div>
        )
    } else {
        return (
            <div className='statusFalse'>
                Занят
            </div>
        )
    }
}
