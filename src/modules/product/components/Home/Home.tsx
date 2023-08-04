import React, {useEffect} from 'react'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            QUSH - Будь активным с нами
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Найди удобное для себя спортивное поле
          </p>
          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Начать</a>
          </button>
        </div>

        <div  className="homeCard grid">
          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Тип поля</label>
            <input type="text" placeholder='Футбол'/>
          </div>
          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="distance">Покрытие</label>
            <input type="text" placeholder='Газон'/>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">Желаемая цена</label>
            <input type="text" placeholder='10000тг-15000тг'/>
          </div>
          <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Поиск</button>
        </div>
      </div>
    </section>
  )
}

export default Home