import React, {useEffect} from 'react'

import '../assets/styles/FieldCard.css'

import {BsArrowRightShort} from 'react-icons/bs'
import {MdKingBed} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdBathtub} from 'react-icons/md'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

import { intToTime } from '../../../helpers/timeConverter';
import { categoryOptions, surfaceOptions } from '../store/constants';
import Field from '../../../types/Field';

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
          <img src={imgSrc} alt={field.name} />

          <span className="discount">
            30% Off
          </span>
        </div>

        <div className="offerBody">
          <div className="price flex">
            <h4>
            {field.price}
            </h4>
            <span className="status">
            For Rent
            </span>
          </div>

          <div className="amenities flex">
            <div className="singleAmenity flex">
              <MdKingBed className="icon"/>
              <small>2 Beds</small>
            </div>
            <div className="singleAmenity flex">
              <MdBathtub className="icon"/>
              <small>1 Bath</small>
            </div>
            <div className="singleAmenity flex">
              <FaWifi className="icon"/>
              <small>Wi-Fi</small>
            </div>
            <div className="singleAmenity flex">
              <MdAirportShuttle className="icon"/>
              <small>Shuttle</small>
            </div>
          </div>

          <div className="location flex">
            <MdLocationOn className="icon"/>
            <small> 450 Vine St #310,{field.location}</small> 
          </div>

          <button className='btn flex'>View Details <BsArrowRightShort className='icon'/></button>

        </div>
      </div>
    </>
  );
}

export default FieldCard