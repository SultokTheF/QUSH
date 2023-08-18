import React, { useState, useEffect } from 'react';
import '../../assets/styles/AddFieldForm.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Field from '../../../../types/Field';
import Verification from '../../../../types/Verification';
import { categoryOptions, surfaceOptions } from '../../store/constants';

import { timeToInt, intToTime } from '../../../../helpers/timeConverter';
import * as FieldHandler from '../../../../services/FieldHandler';

import Validate from '../../../../helpers/userValidation';

const AddFieldForm: React.FC = () => {
  const UserData = Validate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const initialFieldState: Verification = {
    status: 3,
    admin_id: 1,
    id: 0,
    owner_id:0,
    name: '',
    category_sport: 1,
    location: '',
    latitude: 0,           // Set the default value for numeric fields
    longitude: 0,          // Set the default value for numeric fields
    time_from: 0,          // Set the default value for numeric fields
    time_to: 0,            // Set the default value for numeric fields
    description: '',
    price: '',            // Set the default value for numeric fields
    surface_type: 1,
    dimensions: '',
  };

  const [formData, setFormData] = useState<Verification>(initialFieldState);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await FieldHandler.createVerification(formData);
      console.log('Response:', response);
      console.log(JSON.stringify( formData ));
      // You can show a success message or perform other actions here
    } catch (error) {
      console.log(JSON.stringify( formData ));
      console.error('Error submitting form:', error);
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
                placeholder='Сайран'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="distDiv mt-1">
              <label htmlFor="description">Описание поля</label>
              <textarea
                name="description"
                placeholder='Лучшее футбольное поле в стране'
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="location">Адрес</label>
              <input
                type="text"
                name="location"
                placeholder='Астана. Туран 56'
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="time_from">Время начала работы</label>
              <input
                type="time"
                name="time_from"
                value={intToTime( formData.time_from )}
                onChange={handleTimeChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="time_to">Время конца работы</label>
              <input
                type="time"
                name="time_to"
                value={intToTime( formData.time_to )}
                onChange={handleTimeChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="price">Цена аренды</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="category_sport">Тип поля</label>
              <select
                name="category_sport"
                value={formData.category_sport}
                onChange={handleInputChange}
                required
              >
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="surface_type">Тип покрытия</label>
              <select
                name="surface_type"
                value={formData.surface_type}
                onChange={handleInputChange}
                required
              >
                {surfaceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="priceDiv mt-1">
              <label htmlFor="price">Размеры поля</label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className='btn' type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddFieldForm;
