import React, {useEffect} from 'react'
import '../assets/styles/auth.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const RegisterForm: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      <section className='auth'>
        <div className="secContainer container">
          <h1 className='text-white'> Регистрация </h1>
          <div  className="authCard grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="email">Эл.Почта</label>
              <input type="email" placeholder='qush@support.com'/>
            </div>
            <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="password">Пароль</label>
              <input type="password" placeholder='Ваш пароль'/>
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="passwordConfirmation">Поддтверждение пароля</label>
              <input type="password" placeholder='Повторите ваш пароль'/>
            </div>
            <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Регистрация</button>
            <p>Уже есть аккаунт? <a href='/login'>Вход</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
