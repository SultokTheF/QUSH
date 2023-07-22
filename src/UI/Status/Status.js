import React from 'react';
import './Status.css';

export default function Status( props ) {
    if( !props.status ) {
        return (
            <div className='status-true'>
                Свободен
            </div>
        )
    } else {
        return (
            <div className='status-false'>
                Занят
            </div>
        )
    }
}
