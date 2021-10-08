import React from "react";
import { Link } from "react-router-dom";

/* este componente recibira una lista de objetos(cada objeto será un valor)
tengrá nombre, rutaAenviar tipoBoton.
solo hay dos tipos, botonNormal, botonDanger*/

export default function MenuOpcionesTabla({ nombreBoton, rutaEnviar }) {
  let botonNormal = "btn btn-success btn-block mb-2";
  let botonDanger = "btn btn-danger btn-block mb-2";
  return (
    <div className="dropdown text-center">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        opciones
      </button>
      <div
        className="dropdown-menu text-center p-2 rounded-lg"
        aria-labelledby="dropdownMenu2"
      >
        {/* hay que tener en cuenta las commillas invertidas en este caso */}
        <Link to={rutaEnviar} className={botonNormal}>
          {nombreBoton}
        </Link>

        <a href="#!" className={botonDanger}>
          Eliminar
        </a>
      </div>
    </div>
  );
}
