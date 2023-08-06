import React, { useState, useEffect } from 'react';

import '../assets/styles/FieldList.css';

import FieldHandler from '../services/FieldHandler';
import Field from '../../../types/Field';

import FieldCard from './FieldCard';

const InfiniteFieldList: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    fetchFieldList();
  }, []);

  const fetchFieldList = async () => {
    try {
      const fieldsData = await FieldHandler.fetchFields();
      setFields(fieldsData);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  return (
    <>
      <section className='offer section container'>
        <div className="secContainter">

          <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
            <h2 className='secTitle'>
              Все доступные предложения
            </h2>
            <p>
              Здесь предствлены все спортивные поля, доступные на данный момент
            </p>

          </div>

          <div className="mainContent grid">
            {fields.map(field => (
              <FieldCard key={field.id} field={field}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default InfiniteFieldList;