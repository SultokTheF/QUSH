import React from 'react';

import Status from './Status';

import location from '../static/images/icons/location.png';
import shedule from '../static/images/icons/shedule.png';
import choice from '../static/images/icons/choice.png';

export default function Object( props ) {
  const categoryOptions = [
      { value: '1', text: 'Футбол' },
      { value: '2', text: 'Баскетбол' },
      { value: '3', text: 'Волейбол' },
  ];

  const surfaceOptions = [
      { value: '1', text: 'Газон' },
      { value: '2', text: 'Паркет' },
      { value: '3', text: 'ПВХ' },
  ];

  const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === props.category_sport )
  const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === props.surface_type )

  const intToTime = ( timeInSec ) => {
      let minutes = timeInSec % 60;
      let hours = parseInt( timeInSec / 60 ).toString();

      if( parseInt( timeInSec / 60 ) < 10 ) {
          hours = "0" + hours;
      }
      
      if( timeInSec % 60 < 10 ) {
          minutes = "0" + minutes;
      }

      return hours + ":" + minutes;
  }

  return (
    <a href={`object/${props.id}`}>
      <navtext>
        <div className='object'>
          <div className='object-title'>
            Объект: {props.name} 
            <Status status = {props.status}/>
          </div>
          <div className='object-body'>
            <ul>
              <div className='item'>
                <img src={location} width={40}/>
                Локация: <span className='listContent'>{props.location}</span>
              </div>
              <div className='item'>
                <img src={shedule} width={40}/>
                График работы: <span className='listContent'>{intToTime( props.time_from )}-{intToTime( props.time_to )}</span>
              </div>
              <div className='item'>
                <img src={choice} width={40}/>
                Тип поля: <span className='listContent'>{category.text}</span>
              </div>
            </ul>
          </div>
        </div>
      </navtext>
    </a>
  )
}
