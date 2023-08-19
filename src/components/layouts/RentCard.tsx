import React, { useEffect, useState } from 'react'

import './styles/FieldCard.css'

import {BsArrowRightShort} from 'react-icons/bs'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

import Rent from '../../types/Rent'
import { intToTime } from '../../helpers/timeConverter'
import { fetchFields } from '../../services/FieldHandler' 
import Validate from '../../helpers/userValidation'
import Field from '../../types/Field'

interface RentCardProps {
  rent: Rent;
}

const RentCard: React.FC<RentCardProps> = ({ rent }) => {
  const [field, setField] = useState<Field>();

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  useEffect(() => {
    fetchFieldList();
  }, []);

  const fetchFieldList = async () => {
    try {
      const fieldsData = await fetchFields();
      const foundField = fieldsData.find( field => field.id === rent.field_id );
      setField(foundField);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
        <div className="offerBody">
          <div className="price flex">
            <h4>
              {field?.name}
            </h4>

            <h4>
              {intToTime( rent.time_from )} - {intToTime( rent.time_to )}
            </h4>
          </div>
          <a className='btn flex' href={`admin/rent/${rent.id}`}>Посмотреть детали <BsArrowRightShort className='icon'/></a>
        </div>
      </div>
    </>
  );
}

export default RentCard;