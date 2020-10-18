import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import Header from '../../components/header';
import Footer from '../../components/footer';


function Calendar() {
  return(
    <>
      
      <Header />
      
      <div class="blocks">
        <div class="row">
          <div class="col-lg-3">
            <Link to="/event/1">
              <div class="block-event">
                <div class="date">12/02</div>
                <div class="description">Niver do mike</div>

                <div class="row event-infos">
                  <div class="col-6"><FaUsers class="icon" /> 12</div>
                  <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-lg-3">
            <div class="block-event">
              <div class="date">12/02</div>
              <div class="description">Niver do mike</div>

              <div class="row event-infos">
                <div class="col-6"><FaUsers class="icon" /> 12</div>
                <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="block-event">
              <div class="date">12/02</div>
              <div class="description">Niver do mike</div>

              <div class="row event-infos">
                <div class="col-6"><FaUsers class="icon" /> 12</div>
                <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="block-event">
              <div class="date">12/02</div>
              <div class="description">Niver do mike</div>

              <div class="row event-infos">
                <div class="col-6"><FaUsers class="icon" /> 12</div>
                <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="block-event">
              <div class="date">12/02</div>
              <div class="description">Niver do mike</div>

              <div class="row event-infos">
                <div class="col-6"><FaUsers class="icon" /> 12</div>
                <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="block-event">
              <div class="date">12/02</div>
              <div class="description">Niver do mike</div>

              <div class="row event-infos">
                <div class="col-6"><FaUsers class="icon" /> 12</div>
                <div class="col-6 text-right"><MdMonetizationOn class="icon" /> R$280</div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="block-new-event">
              <div class="button-churras">
                <div class="icon-churras"><img src="images/icon_bbq.png"/></div>

                <div class="text-churras-btn">Adicionar Churras</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Calendar;