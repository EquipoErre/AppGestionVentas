import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { deleteUser } from "utils/api";

export default function RegistrosUsuarios({
  id,
  rol,
  estado,
  nombre,
  onChange,
}) {
  // cada ves que se usa un map hay que poner un key
  return (
    <tr key={nanoid}>
      <td>{id}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>{nombre}</td>
      <td>
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
            <Link
              to={`/usuarios/${id}`}
              className="btn btn-success btn-block mb-2"
            >
              Editar
            </Link>

            <button
              // debo pasarle la funcion on change para que se cambie la variable
              // la pagina de la tabla y se actualicen los datos,
              type="button"
              onClick={() => {
                deleteUser(id, onChange);
                //onChange(true);aqui y se quita el parametro de la
                // funcion anterior, tambien en el archivo api.js.
              }}
              className="btn btn-danger btn-block mb-2"
            >
              Eliminar
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
