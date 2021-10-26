import React from "react";
import "styles/login.page.css";

function Register() {
    return (
        <div className="outer">
        <div className="inner">
            <form>
                <h3>Registrar nuevo Usuario</h3>

                <div className="form-group">
                    <label id="label-name">Nombres</label>
                    <input id="input-name"type="text" className="form-control" placeholder="Nombres" required/>
                </div>

                <div className="form-group">
                    <label id="label-lastname">Apellidos</label>
                    <input id="input-lastname"type="text" className="form-control" placeholder="Apellidos" required/>
                </div>

                <div className="form-group">
                    <label id="label-email">Correo Electrónico</label>
                    <input id ="input-email"type="email" className="form-control" placeholder="Ingresar correo electrónico" required/>
                </div>

                <div className="form-group">
                    <label id="label-password">Contraseña</label>
                    <input id="input-password"type="password" className="form-control" placeholder="Ingresar contraseña" required/>
                </div>

                <button id="btn-register" type="submit" className="btn btn-dark btn-lg btn-block">Registrarse</button>
                <p className="forgot-password text-right">
                    ¿Ya estás registrado <a href="/login">iniciar sesión?</a>
                </p>

            </form>
        </div>
        </div>
    );
}

export default Register;