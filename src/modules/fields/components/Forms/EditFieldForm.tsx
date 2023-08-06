import React, {useEffect} from 'react'
import '../../assets/styles/EditFieldForm.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

import { categoryOptions, surfaceOptions } from '../../store/constants';

const EditFieldForm: React.FC = () => {
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