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
                to="/" 
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                О нас
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/teamList" 
                className={({ isActive, isPending }) =>
                  isPending ? "nav-links" : isActive ? "nav-active-links" : "nav-links"
                }
              >
                Расположение полей
              </NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <NavLink
              to="/kz"
              className={location.pathname === "/kz" ? "nav-active-lang" : "nav-links"}
            >
              Қаз
            </NavLink>
            <NavLink
              to="../ru"
              className={location.pathname === "/ru" ? "nav-active-lang" : "nav-links"}
            >
              Рус
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;