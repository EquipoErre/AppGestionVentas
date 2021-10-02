import React from "react";
import { GoogleLogin } from "react-google-login";

import "styles/login.page.css";

const responseGoogle = (response) => {
  console.log(response);
};

function Login(props) {
  return (
    <div className="outer">
      <div className="inner">
        <h3>Iniciar sesión</h3>
        <hr />
        <div className="btn-google">
          <GoogleLogin
            clientId="769477635523-j4h1e16i4m2bjjbloq4b5cao4q83r1rs.apps.googleusercontent.com"
            buttonText="Iniciar sesión con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <hr />
        <form>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresar correo electrónico"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresar contraseña"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Recordar Contraseña
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Ingresar
          </button>
          {/* <p className="forgot-password text-right">
                    ¿Has olvidado tu <a href="#">contraseña?</a>
                </p> */}
          <p className="not-registered text-left">
            ¿Aún no estas registrado? <a href="/register">Crea tu cuenta</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
