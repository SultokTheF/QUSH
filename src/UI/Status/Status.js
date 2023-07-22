import React from 'react';

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
