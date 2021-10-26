import RegistrosUsuarios from "components/UsuariosYRoles/RegistrosUsuarios";
import "styles/usuariosYRolesCss/UsuariosYRoles.css";
import { useEffect, useState } from "react";
import { getUsuarios } from "utils/api";
import { nanoid } from "nanoid";

export default function TablaUsuariosYRoles() {
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  // sirve para actualizar la tabla cuando se elimina un elemento
  // y para cargar la info al inicio
  useEffect(() => {
    const fetchUsers = async () => {
      await getUsuarios(setUsuarios);
      setEjecutarConsulta(false);
    };
    if (ejecutarConsulta) {
      fetchUsers();
    }
  }, [ejecutarConsulta]);
  //console.log(usuarios)

  return (
    <div className="container">
      <h2 className="titulo1">MAESTRO DE USUARIOS</h2>
      {/* seccion de filtros y busqueda */}
      <section className="vistas">
        <div className="vista  row my-4">
          <h4 className="mx-3">Vista de roles</h4>

          <select name="roles" id="rol">
            <option value="todos">Todos</option>
            <option value="administrador">Administrador</option>
            <option value="vendedor">Vendedor</option>
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
          {/* <!-- registros, Filas --> */}
          <tbody>
            {usuarios.map((usuario) => (
              // este componente retorna una fila
              // se le pasa onChange para poder actualizar la info
              <RegistrosUsuarios
                key={nanoid()}
                id={usuario._id}
                estado={usuario.estado}
                rol={usuario.rol}
                nombre={usuario.name}
                onChange={(i) => {
                  setEjecutarConsulta(i);
                }}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
