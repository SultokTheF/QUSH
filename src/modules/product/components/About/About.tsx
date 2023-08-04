import React, {useEffect}  from 'react'
import './About.css'
// import customerImg from '../../Assets/customer.png'
// import mountainImg from '../../Assets/mountain.png'
// import climbingImg from '../../Assets/climbing.png'
// import video from '../../Assets/video.mp4'

import Support from '../../assets/images/Support.png'
import Development from '../../assets/images/Code.png'
import Field from '../../assets/images/Ball.png'

import video from '../../assets/video/AldiyarFlex.MOV'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'


const About: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <section className='about  section'>
      <div className="secContainer">

        <h2 className='title'>
          Почему QUSH?
        </h2>


        <div className="mainContent container grid">

          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={Field} alt="Image" />
            <h3>Спортивные поля</h3>
            <p>Благодаря нашей платформе ты сможешь найти удобное для тебя спортивное поле.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={Development} alt="Image" />
            <h3>Развитие</h3>
            <p>Мы планируем расширять функционал нашей платформы.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={Support} alt="Image" />
            <h3>Поддрежка</h3>
            <p>Задавайте нам любой интересующий вопрос и мы вам ответим</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>Четатам Четатам</h2>
              <p>Четатам текст </p>
            </div>

            <div data-aos="fade-left" className="cardVideo">
              <video autoPlay muted loop>
                <source src={video} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About