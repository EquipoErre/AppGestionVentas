import usuariosJson from "json/usuarios.json";
import RegistrosUsuarios from "components/UsuariosYRoles/RegistrosUsuarios";
import "styles/usuariosYRolesCss/UsuariosYRoles.css";

export default function TablaUsuariosYRoles() {
  return (
    <div className="container">
      <h2 className="titulo1">MAESTRO DE USUARIOS</h2>
      <section className="vistas">
        <div className="vista  row my-4">
          <h4 className="mx-3">Vista de roles</h4>
          <select name="roles" id="rol">
            {/* <!-- vendedor, administrador, ejecutivo, operario, director, gerente comercial --> */}
            <option value="todos">Todos</option>
            <option value="administrador">Administrador</option>
            <option value="vendedor">Vendedor</option>
            {/* <!-- <option value="ejecutivo">Ejecutivo</option>
                    <option value="operario">Operario</option>
                    <option value="director">Director</option>
                    <option value="ger-comercial">Gerente comercial</option> --> */}
          </select>
        </div>
        <div className="bar-busqueda row my-4">
          <select className="col-3 mr-2 " name="busqueda-usuario" id="usuario">
            <option value="id">Id</option>
            <option value="nombre">Nombre</option>
          </select>
          <input
            className="form-control col-6 mr-2"
            type="text"
            placeholder="Buscar..."
          />
          <button className="btn btn-primary col-2" type="submit">
            Buscar
          </button>
        </div>
      </section>

      {/* <!-- tabla de usuarios --> */}
      <section className="tabla-usuarios">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="col-1">Id</th>
              <th className="col-2">Rol</th>
              <th className="col-2">Estado</th>
              <th className="col 3">Nombre</th>
              <th className="col-1">Opciones</th>
            </tr>
          </thead>
          {/* <!-- registros --> */}
          <tbody>
            {usuariosJson.map((usuario) => (
              <RegistrosUsuarios
                id={usuario.id}
                estado={usuario.estado}
                rol={usuario.rol}
                nombre={usuario.nombre}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
