import React from 'react';
import './Navbar.css';

export default function Navbar() {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        // Удаление токена из localstorage
        localStorage.removeItem('token');
        window.location.href = '/login';

        // Дополнительные действия после выхода, например, перенаправление на страницу входа
        // window.location.href = '/login';
    };

    return (
        <header>
        <div className="navbar">
            <a className="navbar-logo"></a>
            <a href="/"><navtext>Главная</navtext></a>
            <a href="/about"><navtext>О нас</navtext></a>
            <a href="/objects"><navtext>Мои объекты</navtext></a>
            {/* <div className="nav-profile">
                <img src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar"/>
                <a href="#" className="username">Aliba Kamilbully</a>
            </div> */}
            <div className='navbar-profile'>
                {token ? (
                    // Если токен присутствует, рендерим кнопку "Выйти"
                    <div className=''>
                        <button className='btn' onClick={handleLogout}>Выйти</button>
                    </div>
                ) : (
                    // Если токен отсутствует, рендерим кнопку "Войти" и "Регистрация"
                    <div className=''>
                        <a className='btn btn-outline-primary m-1' href='/login'>Войти</a>
                        <a className='btn' href='/register'>Регистрация</a>
                    </div>
                )}
            </div>
        </div>
    </header>
    )
}