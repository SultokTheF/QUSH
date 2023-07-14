import React from 'react';

export default function Checkbox( props ) {
    if( props.status ) {
        return (
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" value=""/>
            </div>
        );
    } else {
        return (
            <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" value="" checked disabled/>
            </div>
        );
    }
}
