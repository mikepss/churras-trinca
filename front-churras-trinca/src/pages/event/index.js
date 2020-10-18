import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

function Event() {
  const { id } = useParams();
  return(
    <>
      <Header />

      <div class="participants">
        <div class="row">
          <div class="col-10">
            <h4>12/10</h4>
          </div>

          <div class="col-2">
            <FaUsers class="icon" /> <strong>12</strong>
          </div>
        </div>

        <div class="row">
          <div class="col-10">
            <h4>Niver do mike</h4>
          </div>

          <div class="col-2">
          <MdMonetizationOn class="icon" /> <strong>R$280</strong>
          </div>
        </div>

        <div class="table">
          <tr class="row parts">
            <td class="col-10"><label><input name="alice" type="radio" class="mr-3" /> <strong>Alice</strong></label></td>
            <td class="col-2"><strong>R$10,00</strong></td>
          </tr>

          <tr class="row parts">
            <td class="col-10"><label><input name="alice" type="radio" class="mr-3" /> <strong>Alice</strong></label></td>
            <td class="col-2"><strong>R$10,00</strong></td>
          </tr>

          <tr class="row parts">
            <td class="col-10"><label><input name="alice" type="radio" class="mr-3" /> <strong>Alice</strong></label></td>
            <td class="col-2"><strong>R$10,00</strong></td>
          </tr>

          <tr class="row parts">
            <td class="col-10"><label><input name="alice" type="radio" class="mr-3" /> <strong>Alice</strong></label></td>
            <td class="col-2"><strong>R$10,00</strong></td>
          </tr>

          <tr class="row parts">
            <td class="col-10"><label><input name="alice" type="radio" class="mr-3" /> <strong>Alice</strong></label></td>
            <td class="col-2"><strong>R$10,00</strong></td>
          </tr>
        </div>

        <button class="btn btn-churras">+ Adicionar Participante</button>
      </div>

      <Footer />
    </>
  );
}

export default Event;