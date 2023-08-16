import React, {useEffect} from 'react'

import './styles/FieldCard.css'

import {BsArrowRightShort} from 'react-icons/bs'
import { GiClothes } from 'react-icons/gi'
import {FaWifi} from 'react-icons/fa'
import {MdBathtub} from 'react-icons/md'
import {ImPriceTag} from 'react-icons/im'
import {MdLocationOn} from 'react-icons/md'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

import { intToTime } from '../../helpers/timeConverter';
import { categoryOptions, surfaceOptions } from '../../modules/fields/store/constants';
import Field from '../../types/Field';

interface FieldCardProps {
  field: Field;
}

const imgSrc = "https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1668613158/primary/oo36twekciqogi7th0eq";

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  const category = categoryOptions.find((obj) => parseInt(obj.value) === field.category_sport);
  const surface = surfaceOptions.find((obj) => parseInt(obj.value) === field.surface_type);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
        <div className="destImage">
          <img src={field.image} alt={ field.owner_id?.toString() } />
        </div>

        <div className="offerBody">
          <div className="price flex">
            <h4>
            {field.name}
            </h4>
            { field.for_rent && (
              <span className="status">
                {field.price} тг/час
              </span>
            ) }
          </div>

          <div className="amenities flex">
            {field.bath > 0 && (
              <>
                <div className="singleAmenity flex">
                  <MdBathtub className="icon" />
                  <small>{field.bath} Душевые кабинки</small>
                </div>
              </>
            )} 
            { field.for_rent && (
              <div className="singleAmenity flex">
                <FaWifi className="icon"/>
                <small>Wi-Fi</small>
              </div>
            ) }

            {field.сloakroom > 0 && (
              <>
                <div className="singleAmenity flex">
                  <GiClothes className="icon"/>
                  <small>{ field.сloakroom } Раздевалки</small>
                </div>
              </>
            )} 
          </div>

          <div className="location flex">
            <MdLocationOn className="icon"/>
            <small>{field.location}</small> 
          </div>
          <a className='btn flex' href={`/field/${field.id}`}>Посмотреть детали <BsArrowRightShort className='icon'/></a>

        </div>
      </div>
    </>
  );
}

export default FieldCard