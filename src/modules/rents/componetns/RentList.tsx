import React, { useEffect, useState } from "react";
import axios from "axios";

import Rent from "../../../types/Rent";
import Spinner from "../../../components/ui/Spinner";
import RentCard from "../../../components/layouts/RentCard";
import Validate from "../../../helpers/userValidation";

import { rent } from "../../../store/endpoints";

const RentList: React.FC = () => {
  const userData = Validate();

  const [rents, setrents] = useState<Rent[]>([]);

  useEffect(() => {
    if( userData ) {
      fetchrents();
    }
  }, [userData]);

  const fetchrents = async () => {
    try {
      const response = await axios.get( 
        rent, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        }
      );
      setrents( response.data.data );
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

            { rents? (
              <div className="mainContent grid">
              {rents.map(rents => (
                <RentCard key={rents.id} rent={rents}/>
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

export default RentList;