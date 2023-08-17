import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import '../../assets/styles/EditFieldForm.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import { categoryOptions, surfaceOptions } from '../../store/constants';

import { timeToInt, intToTime } from '../../../../helpers/timeConverter';
import * as FieldHandler from '../../../../services/FieldHandler';

import Validate from '../../../../helpers/userValidation';
import Field from '../../../../types/Field';

const EditFieldForm: React.FC = () => {
  const UserData = Validate();

  const params = useParams<{ id: string }>();
  const fieldId = Number( params.id );

  const [field, setField] = useState<Field>();
  
  useEffect(() => {
    fetchField();
  }, []);

  const fetchField = async () => {
    try {
      const fieldsData = await FieldHandler.fetchFields();
      const foundField = fieldsData.find( field => field.id === fieldId );
      setField(foundField);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  useEffect(() => {
    if (field) {
      setFormData({
        id: field.id,
        owner_id: field.owner_id,
        name: field.name,
        category_sport: field.category_sport,
        location: field.location,
        latitude: field.latitude,
        longitude: field.longitude,
        time_from: field.time_from,
        time_to: field.time_to,
        description: field.description,
        price: field.price,
        surface_type: field.surface_type,
        dimensions: field.dimensions,
      });
    }
  }, [field]);

  const [formData, setFormData] = useState<Field>( field || {
    id: 0,
    owner_id:0,
    name: '',
    category_sport: 1,
    location: '',
    latitude: 0,        
    longitude: 0,        
    time_from: 0,          
    time_to: 0,            
    description: '',
    price: '',          
    surface_type: 1,
    dimensions: '',
  } );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await FieldHandler.updateField(formData);
      console.log('Response:', response);
      console.log(JSON.stringify( formData ));
      // You can show a success message or perform other actions here
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log(JSON.stringify( formData ));
      // You can show an error message or handle errors here
    }
  };

  // Update formData when input values change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update formData when time values change
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: timeToInt( value ),
    }));
  };

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='addForm'>
      <div className='secContainer container'>
        <div className='addFormCard grid'>
          <h1>Добавление поля</h1>
          <form onSubmit={handleSubmit}>
            <div className="locationDiv">
              <label htmlFor="name">Название поля</label>
              <input
                type="text"
                name="name"
                placeholder={field?.name}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="distDiv">
              <label htmlFor="description">Описание поля</label>
              <textarea
                name="description"
                placeholder={field?.description}
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="location">Адрес</label>
              <input
                type="text"
                name="location"
                placeholder={field?.location}
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="time_from">Время начала работы</label>
              <input
                type="time"
                name="time_from"
                value={intToTime( formData.time_from )}
                onChange={handleTimeChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="time_to">Время конца работы</label>
              <input
                type="time"
                name="time_to"
                value={intToTime( formData.time_to )}
                onChange={handleTimeChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Цена аренды</label>
              <input
                type="text"
                name="price"
                placeholder={field?.price}
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="category_sport">Тип поля</label>
              <select
                name="category_sport"
                value={formData.category_sport}
                onChange={handleInputChange}
              >
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="priceDiv">
              <label htmlFor="surface_type">Тип покрытия</label>
              <select
                name="surface_type"
                value={formData.surface_type}
                onChange={handleInputChange}
              >
                {surfaceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <button className='btn' type="submit">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditFieldForm;