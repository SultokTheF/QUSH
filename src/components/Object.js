import React from 'react';

import Status from './Status';

import location from '../static/images/icons/location.png';
import shedule from '../static/images/icons/shedule.png';
import choice from '../static/images/icons/choice.png';

export default function Object( props ) {
  return (
    <a>
      <div className='object'>
        <div className='object-title'>
          Объект: {props.title} 
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
              График работы: <span className='listContent'>{props.shedule}</span>
            </div>
            <div className='item'>
              <img src={choice} width={40}/>
              Тип поля: <span className='listContent'>{props.category}</span>
            </div>
          </ul>
        </div>
      </div>
    </a>
  )
}
