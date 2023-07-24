import React from 'react';

import Map from '../components/Map/Map';

export default function Main() {
  return (
    <div className='content'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <Map addMarkers/>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}
