import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import Button from "../ui/Button";

import './styles/Navbar.css';

import LogoImage from '../../assets/images/logo/QUSH_logo_black_expanded.png';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <img src={LogoImage} alt="Logo" className="logo-image" />
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink 
                to="/clients" 
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                Клиентам
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/business"
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                Бизнесу
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/map" 
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                Расположение полей
              </NavLink>
            </li>
          </ul>
          <div className="nav-buttons"> 
          <a href="/register"><Button body="Зарегистрироваться"/></a>
          <a href="/login">Вход</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;