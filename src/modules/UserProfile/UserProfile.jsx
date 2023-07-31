import React, {useState, useRef} from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const  params = useParams();
  const userId = parseInt( params.id );

  
  return (
    <div className='content'>
      
    </div>
  )
}
