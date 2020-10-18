import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

function Login() {
  return(
      <div class="background-login">
        <div class="login">
          <h4>Agenda de Churras</h4>

          <form action="" method="post" class="form-login">
            <label>
              Login 
              <input type="text" placeholder="e-mail" />
            </label>

            <label>
              Senha 
              <input type="password" placeholder="senha" />
              <Link class="link-a" to="/register">Ainda não possuí conta? Registre-se</Link>
            </label>


            <button type="submit" to="/calendar">Entrar</button>
          </form>

        </div>

      </div>
  ); 
}

export default Login;