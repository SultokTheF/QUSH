import React, {useEffect} from 'react'

import './styles/FieldCard.css'

import {BsArrowRightShort} from 'react-icons/bs'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

import Verification from '../../types/Verification';

interface VerificationCardProps {
  verification: Verification;
}

const VerificationCard: React.FC<VerificationCardProps> = ({ verification }) => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
        <div className="offerBody">
          <div className="price flex">
            <h4>
            {verification.name}
            </h4>
          </div>
          <a className='btn flex' href={`admin/verification/${verification.id}`}>Посмотреть детали <BsArrowRightShort className='icon'/></a>
        </div>
      </div>
    </>
  );
}

export default VerificationCard