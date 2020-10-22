import React from "react";
import './footer.scss'

import vk from '../images/vk.png'
import inst from '../images/inst.png'
import fb from '../images/fb.png'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row first-row">
          <div className="col-lg-6 footer-links">
            <a href="">Условия использования</a>
            <a href="">Политика конфиденциальности</a>
            <a href="">Как это работает</a>
          </div>
          <div className="col-lg-3 footer-social">
            <span>Мы в соц сетях:</span>
            <a href="#vk">
              <img src={vk} alt="vk"/>
            </a>
            <a href="#inst">
              <img src={inst} alt="instargam"/>
            </a>
            <a href="#facebook">
              <img src={fb} alt="facebook"/>
            </a>
          </div>
          <div className="col-lg-3 footer-phone">
            <a href="tel:89991234567">+7 (495) 925-91-11</a>
          </div>
        </div>
        <div className="row second-row">
          <div className="col-lg-6">
            <a href="#">Реквизиты компании</a>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <div>
              <img src="img/visa.png" alt="visa"/>
                <img src="img/mc.png" alt="mastercard"/>
                  <img src="img/mir.png" alt="mir"/>
            </div>
          </div>
        </div>
        <div className="row third-row">
          <div className="col-md-6">
            <p>© 2020 Exprome</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <a href="#">Создание сайта</a>
            <span>ДиВиЕР</span>
          </div>
        </div>
      </div>
    </footer>
  )
}