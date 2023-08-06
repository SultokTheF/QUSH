import React, {useEffect} from 'react'
import '../assets/styles/AddFieldForm.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import { categoryOptions, surfaceOptions } from '../store/constants';

const AddFieldForm: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='addForm' id={`main`}>
      <div className="secContainer container">
        <div  className="addFormCard grid">
          <h1>Добавление поля</h1>
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
            </div>
            <button className='btn'>Поиск</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddFieldForm;