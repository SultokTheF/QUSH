import React, { useEffect, useState } from "react";
import axios from "axios"

import Verification from "../../../types/Verification";

import VerificationCard from "../../../components/layouts/VeificationCard";

import Validate from '../../../helpers/adminValidation';

import Spinner from "../../../components/ui/Spinner";

const FieldsForVerification: React.FC = () => {
  const [verifications, setVerifications] = useState<Verification[]>([]);

  const adminData = Validate();

  useEffect(() => {
    fetchVerifications();
  }, []);

  const fetchVerifications = async () => {
    try {
      const response = await axios.get( 
        'http://83.229.87.19:8001/verification/fields-ver/', 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        }
      );
      setVerifications( response.data.data );
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div>
        <section className='offer section container'>
          <div className="secContainter">

            <div className="secIntro">
              <h2 className='secTitle text-light'>
                Все верификации
              </h2>
              <p className='text-light'>
                Здесь предствлены все запросы на создания полей
              </p>

            </div>

            { verifications? (
              <div className="mainContent grid">
              {verifications.map(verifications => (
                <VerificationCard key={verifications.id} verification={verifications}/>
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

export default FieldsForVerification;