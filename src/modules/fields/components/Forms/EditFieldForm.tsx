import React, {useEffect} from 'react'
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

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='editForm'>
      <div className="secContainer container">
        <div  className="editFormCard grid">
          <h1>Редактирование поля</h1>
          <form>
            <div className="locationDiv">
              <label htmlFor="location">Название поля</label>
              <input type="text" placeholder='Сайран'/>
            </div>
            <div className="distDiv">
              <label htmlFor="distance">Описание поля</label>
              <textarea placeholder='Лучшее футбольное поле в стране'/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Адресс</label>
              <input type="text" placeholder='Астана. Туран 56'/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Longitude</label>
              <input type="number"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Latitude</label>
              <input type="number"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Ширина поля</label>
              <input type="number"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Длина поля</label>
              <input type="number"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Изображение</label>
              <input type="file"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Время начала работы</label>
              <input type="time"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Время конца работы</label>
              <input type="time"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Цена аренды</label>
              <input type="number"/>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Тип поля</label>
              <select>
                {categoryOptions.map( option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ) )}
              </select>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Тип покрытия</label>
              <select>
                {surfaceOptions.map( option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ) )}
              </select>
              <div className="priceDiv">
                <label htmlFor="price">Освещение</label>
                <input type="text"/>
              </div>
              <div className="priceDiv">
                <label htmlFor="price">Количество душевых кабинок</label>
                <input type="number"/>
              </div>
              <div className="priceDiv">
                <label htmlFor="price">Количество раздевалок</label>
                <input type="number"/>
              </div>
              <div className="priceDiv">
                <label htmlFor="price">Правила пользования полем</label>
                <textarea/>
              </div>
              <div className="priceDiv">
                <label htmlFor="price">Вместимость поля</label>
                <input type="number"/>
              </div>
              <div className="priceDiv">
                <label htmlFor="price">Дополнительные услуги</label>
                <input type="text"/>
              </div>
            </div>
            <button className='btn'>Сохранить изменения</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditFieldForm;