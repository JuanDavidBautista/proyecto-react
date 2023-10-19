import React from 'react';
import { Link } from 'react-router-dom';


const Login = ()=>{
    return(
        <div className="login-box">
  <div className="login-logo">
    <Link to={"#"}><b>Iniciar</b>Sesion</Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienvenido! Ingrese sus datos :)</p>
      <form action="/dashboard" method="post">
        <div className="input-group mb-3">
          <input type="email" 
                className="form-control" 
                placeholder="Correo Electronico"
                id="email"
                name="email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" 
                className="form-control" 
                placeholder="Contraseña"
                id = "password"
                name = "password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>

      <div className="social-auth-links text-center mb-3">
        <button type='submit' className="btn btn-block btn-primary">
           ingresar
        </button>
        <Link to={"#"} className="btn btn-block btn-info">
           crear cuenta
        </Link>
      </div>
      </form>
      {/* /.social-auth-links */}
    </div>
    {/* /.login-card-body */}
  </div>
</div>

    ) 
}
export default Login;