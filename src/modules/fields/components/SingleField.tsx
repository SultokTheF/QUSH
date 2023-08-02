import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import '../assets/styles/SingleField.css';

import { categoryOptions, surfaceOptions } from '../store/constants';
import Field from '../../../types/Field';
import FieldHandler from '../services/FieldHandler';

const SingleField: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [field, setField] = useState<Field | null>(null);

  useEffect(() => {
    fetchFieldList();
  }, []);

  const fetchFieldList = async () => {
    try {
      const fieldsData = await FieldHandler.fetchFields();
      const foundField = fieldsData.find(field => field.id === parseInt( id as string ));
      setField(foundField || null);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === field?.category_sport )
  const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === field?.surface_type )

  return(
    <>
      
    </>
  );
}

export default SingleField;