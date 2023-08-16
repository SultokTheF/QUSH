import React, { useState, useEffect } from 'react';
import '../../assets/styles/AddFieldForm.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Field from '../../../../types/Field';
import { categoryOptions, surfaceOptions } from '../../store/constants';

import { timeToInt, intToTime } from '../../../../helpers/timeConverter';
import * as FieldHandler from '../../../../services/FieldHandler';

import Validate from '../../../../helpers/userValidation';

const AddFieldForm: React.FC = () => {
  const UserData = Validate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const initialFieldState: Field = {
    id: 0,
    owner_id: 0,
    name: '',
    category_sport: 1,
    location: '',
    latitude: 0,           // Set the default value for numeric fields
    longitude: 0,          // Set the default value for numeric fields
    time_from: 0,          // Set the default value for numeric fields
    time_to: 0,            // Set the default value for numeric fields
    description: '',
    price: 0,              // Set the default value for numeric fields
    image: '', 
    width: 0,              // Set the default value for numeric fields
    length: 0,             // Set the default value for numeric fields
    surface_type: 1,
    capacity: 0,           // Set the default value for numeric fields
    facilities: '',
    lighting: '',
    rules: '',
    bath: 0,               // Set the default value for numeric fields
    сloakroom: 0,          // Set the default value for numeric fields
    additional_services: '',
    for_rent: true,
    dimensions: 'dsad',
  };

  const [formData, setFormData] = useState<Field>(initialFieldState);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await FieldHandler.createField(formData);
      console.log('Response:', response);
      console.log(JSON.stringify( formData ));
      // You can show a success message or perform other actions here
    } catch (error) {
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
              />
            </div>
            <div className="distDiv">
              <label htmlFor="description">Описание поля</label>
              <textarea
                name="description"
                placeholder='Лучшее футбольное поле в стране'
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="location">Адрес</label>
              <input
                type="text"
                name="location"
                placeholder='Астана. Туран 56'
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
              <label htmlFor="width">Ширина поля</label>
              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="length">Длина поля</label>
              <input
                type="number"
                name="length"
                value={formData.length}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="image">Изображение</label>
              <input
                type="file"
                name="image"
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
                type="number"
                name="price"
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
            <div className="priceDiv">
              <label htmlFor="lighting">Освещение</label>
              <input
                type="text"
                name="lighting"
                value={formData.lighting}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="bath">Количество душевых кабинок</label>
              <input
                type="number"
                name="bath"
                value={formData.bath}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="сloakroom">Количество раздевалок</label>
              <input
                type="number"
                name="сloakroom"
                value={formData.сloakroom}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="rules">Правила пользования полем</label>
              <textarea
                name="rules"
                value={formData.rules}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="capacity">Вместимость поля</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="priceDiv">
              <label htmlFor="additional_services">Дополнительные услуги</label>
              <input
                type="text"
                name="additional_services"
                value={formData.additional_services}
                onChange={handleInputChange}
              />
            </div>
            <button className='btn' type="submit">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddFieldForm;
