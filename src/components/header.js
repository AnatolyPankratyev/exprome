import React from "react";
import './header.scss'
import {Link} from "react-router-dom";

export const Header = () => {

  return (

    <header>
      <div className="container">
        <div className="row">
          <div className="header-col col-lg-4">
            <div className="logo-and-desc">
              <div className="header__logo">
                <span className="logo">Exprome</span>
              </div>
              <div className="header__description">
                <p>поздравление от звезды</p>
              </div>
            </div>
          </div>
          <div className="header-col col-lg-6">
            <div className="header__search">
              <input type="text" className="form-control" placeholder="Поиск по звездам"/>
            </div>
          </div>
          <div className="header-col col-lg-2">
            <div className="header__buttons">
              <Link to="#">Вход</Link>
              <Link to="#">Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}