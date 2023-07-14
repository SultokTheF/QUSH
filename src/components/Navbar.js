import React from 'react';

export default function Navbar() {
    return (
        <header>
        <div className="nav">
            <a className="logo"></a>
            <a href="/"><navtext>Главная</navtext></a>
            <a href="/about"><navtext>О нас</navtext></a>
            <a href="/objects"><navtext>Мои объекты</navtext></a>
            {/* <div className="nav-profile">
                <img src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar"/>
                <a href="#" className="username">Aliba Kamilbully</a>
            </div> */}
            <div className='nav-profile'>
                <div className=''>
                    <a className='btn btn-outline-primary m-1' href='/login'>Войти</a>
                    <a className='btn' href='/register'>Регистрация</a>
                </div>
            </div>
        </div>
    </header>
    )
}