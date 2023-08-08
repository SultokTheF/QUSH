import React, {useState} from 'react'
import './styles/Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

import Logo from '../../assets/images/logo/QUSH_logo_black_expanded.png'
import icon from '../../assets/images/icons/CV.jpg'

const Navbar: React.FC = () => {

  const [active, setActive]  = useState('navBar')

  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
    setActive('navBar')
  }

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
    setTransparent('header activeHeader')
    }else{
    setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <header className={transparent}>

        <div className="logoDiv">
          <a href="/" className="logo flex"><h1><img src={Logo} className='qush-logo' /></h1></a>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists flex">
            <li className="navItem">
              <a href="/#main" className="navLink">Главная</a>
            </li>
            <li className="navItem">
              <a href="/#about" className="navLink">О нас</a>
            </li>
            <li className="navItem">
              <a href="/#contact" className="navLink">Контакты</a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/login">Вход</a>
              </button>
              <button className="btn">
                <a href="/register">Регистрация</a>
              </button>
            </div>

            {/* <div className="headerBtns flex">
              <div className='user-icon'>
                <img src={icon}/>
              </div>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Султанияр Куандык
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="/user/profile">Профиль</a></li>
                  <li><a className="dropdown-item" href="#">Мои заказы</a></li>
                  <li><a className="dropdown-item" href="#">Настройки</a></li>
                  <li><a className="dropdown-item" href="#">Выход</a></li>
                </ul>
              </div>
            </div> */}
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar