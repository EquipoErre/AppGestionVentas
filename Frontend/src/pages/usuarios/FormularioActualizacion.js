import { perfilUsuario } from "context/UsuarioActual";

import { useParams } from "react-router";
import {  useRef } from "react";
import "styles/usuariosYRolesCss/FormularioUsuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// normalmente se accederia a la api a traves de useEffect
import usuariosJson from "json/usuarios.json";
export default function Formulario() {
  //   id es el nombre que se le puso en la ruta
  const { id } = useParams();

  const getUsuario = () => {
    for (let i = 0; i < usuariosJson.length; i++) {
      if (usuariosJson[i].id === id) {
        return usuariosJson[i];
      }
    }
  };
  const enviarAlBackend = (e) => {
    // aqui ejecutar acciones para enviar al backend
    e.preventDefault();
    const datosActualizados = {}
    // cargar los datos que no se pueden cambiar
    datosActualizados['id'] = usuarioActual.id
    datosActualizados['correo'] = usuarioActual.correo
    // cargar los datos nuevos
    const formdata = new FormData(form.current);
    formdata.forEach((value, key) => {
      datosActualizados[key] = value;
    });
    
    console.log(usuarioActual, datosActualizados)
    toast.success("usuario creado con exito");
  };

  let usuarioActual = getUsuario();

  // se ordenan los datos para tener siempre actualizada la info
  const form = useRef(null);
  // ya no es necesario usar el useState
  // const [nombre, setNombre] = useState(usuarioActual.nombre);
  // const [rol, setRol] = useState(usuarioActual.rol);
  // const [estado, setEstado] = useState(usuarioActual.estado);

  return (
    <div className="paginaActualizacionUsuarios">
      <h1 className="titulo-principal">Gestionar usuarios y roles</h1>
      <section className="form-roles">
        <form ref={form} onSubmit={enviarAlBackend}>
          <h3 className="titulo-3">
            Id: <span>{id}</span>
          </h3>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            autoComplete="off"
            type="text"
            name="nombre"
            id="nombre"
            defaultValue={usuarioActual.nombre}
          />
          <label htmlFor="estado">Estado</label>
          <select
            className="seleccionar"
            name="estado"
            id="estado"
            defaultValue={usuarioActual.estado}
          >
            <option value="seleccionar" disabled>
              seleccione una opción
            </option>
            <option value="pendiente">Pendiente</option>
            <option value="autorizado">Autorizado</option>
            <option value="no autorizado">No Autorizado</option>
          </select>
          <label htmlFor="rol">Asignar rol</label>
          <select
            className="seleccionar"
            name="rol"
            id="roles"
            defaultValue={usuarioActual.rol}
          >
            <option value="seleccionar" disabled>
              seleccione una opción
            </option>
            <option value="vendedor">Vendedor</option>
            <option value="administrador">Administrador</option>
            {/* <!-- <option value="operario">Operario</option>
                        <option value="director">Director</option>
                        <option value="gerente">Gerente comercial</option> --> */}
          </select>
          <input className="button" type="submit" value="Enviar" />
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </div>
  );
}
