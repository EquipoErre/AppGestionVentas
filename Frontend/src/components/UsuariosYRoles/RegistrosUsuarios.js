import MenuOpcionesTabla  from "components/MenuOpcionesTabla";


export default function RegistrosUsuarios(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.rol}</td>
      <td>{props.estado}</td>
      <td>{props.nombre}</td>
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
            <div className="pb-2">
              {/* hay que tener en cuenta las commillas invertidas en este caso */}
              <Link to={`/usuarios/${props.id}`} className="btn btn-success btn-block">
                Editar
              </Link>
            </div>

            <a href="#!" className="btn btn-danger btn-block">
              Eliminar
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
