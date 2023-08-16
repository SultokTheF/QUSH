import React, { useState, useEffect } from 'react';

import '../../fields/assets/styles/FieldList.css';

import FieldHandler from '../../../services/FieldHandler';
import Field from '../../../types/Field';

import FieldCard from '../../../components/layouts/FieldCard';

import Validate from '../../../helpers/userValidation';

import Spinner from '../../../components/ui/Spinner';

const LandLordFields: React.FC = () => {
  const userData = Validate();

  const [fields, setFields] = useState<Field[]>();

  useEffect(() => {
    if (userData) {
      fetchFieldList();
    }
  }, [userData]);

  const fetchFieldList = async () => {
    try {

      const fieldsData = await FieldHandler.fetchFields();
      const filteredFields = fieldsData.filter((field) => field.owner_id === userData?.userId);
      setFields(filteredFields);

    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };
  
  return (
    <>
      <div>
        <section className='offer section container'>
          <div className="secContainter">

            <div className="secIntro">
              <h2 className='secTitle text-light'>
                Здраствуйте { userData?.firstName } { userData?.lastName }
              </h2>
              <p className='text-light'>
                Здесь предствлены все ваши спортивные объекты
              </p>

            </div>

            { fields? (
              <div className="mainContent grid">
              {fields.map(field => (
                <FieldCard key={field.id} field={field}/>
              ))}
            </div>
            ) : (
              <Spinner/>
            ) }
          </div>
        </section>
      </div>
    </>
  );
}

export default LandLordFields;