import React from "react";
import './star-card.scss'
import {Backbtn} from "./back-btn";

import avatar from '../images/avatar.png'

export const StarCard = () => {

  return (
    <section className="star-card">
      <div className="container">

        <Backbtn/>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="star-avatar">
              <img src={avatar} alt="avatar"/>
            </div>
          </div>

          <div className="col-lg-8">

            <div className="star-title">
              <h3>Анна Семенович</h3>
            </div>

            <div className="star-cat-and-rating">
              <p>Певцы</p>

              <div className="form-group">
                <label htmlFor="rating1">
                  <div className="circle-label-rating">
                    <div className="star-label-rating"/>
                  </div>
                  <input type="radio" className="" id="rating1"/>
                </label>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}