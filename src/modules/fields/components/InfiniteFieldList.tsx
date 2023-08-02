import React, { useState, useEffect } from 'react';

import '../assets/styles/FieldList.css';

import FieldHandler from '../services/FieldHandler';
import Field from "../types/Field";

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
      <div className='field-list'>
        {fields.map(field => (
          <div className='field-item' key={ field.id }>
            <FieldCard key={field.id} field={field}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfiniteFieldList;