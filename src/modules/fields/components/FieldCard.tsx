import React from 'react';

import '../assets/styles/FieldCard.css';

import { timeToInt, intToTime } from '../../../helpers/timeConverter';
import { categoryOptions } from '../store/constants';
import Field from '../types/Field';

import location from '../assets/images/location.png';
import shedule from '../assets/images/shedule.png';
import choice from '../assets/images/choice.png';

interface FieldCardProps {
  field: Field;
}

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  const category = categoryOptions.find((obj) => parseInt(obj.value) === field.category_sport);

  return (
    <>
      <a href={ `field/${field.id}` }>
        <div className='field-card'>
          <div className='field-title'>
            Объект: { field.name }
          </div>
          <div className='field-card-body'>
            <ul>
              <div className='field-card-item'>
                <img src={location} alt="" />
                Адрес: <span className='field-card-label'> { field.location } </span>
              </div>
              <div className='field-card-item'>
                <img src={shedule} alt="" />
                График работы: <span className='field-card-label'> {intToTime( field.time_from )}-{intToTime( field.time_to )} </span>
              </div>
              <div className='field-card-item'>
                <img src={choice} alt="" />
                Тип поля: <span className='field-card-label'> { category?.text } </span>
              </div>
            </ul>
          </div>
        </div>
      </a>
    </>
  );
}

export default FieldCard;