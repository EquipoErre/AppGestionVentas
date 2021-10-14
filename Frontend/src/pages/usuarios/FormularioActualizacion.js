import { useParams } from "react-router";
import { useRef } from "react";
import "styles/usuariosYRolesCss/FormularioUsuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchUsuarios } from "utils/api";
import { Link } from "react-router-dom";
// normalmente se accederia a la api a traves de useEffect

export default function Formulario() {
  //   id es el nombre que se le puso en la ruta
  // permite optener el valor n de la ruta
  // usuarios/n
  const { id } = useParams();

  const enviarAlBackend = (e) => {
    e.preventDefault();
    const datosActualizados = {};
    // cargar los datos que no se pueden cambiar
    datosActualizados["id"] = id;
    // cargar los datos nuevos
    const formdata = new FormData(form.current);
    formdata.forEach((value, key) => {
      datosActualizados[key] = value;
    });
    // validar si el campo nombre está vacio
    // si lo esta no se actualiza
    if (datosActualizados["nombre"] === "") {
      delete datosActualizados["nombre"];
    }
    // con lo anterior lo mas probable es que quede
    // solo el id en el objeto
    // entonces hay que validar si solo existe el id
    // no se actualiza nada
    // los otros campos por si no se cambian el useRef
    // no los captura
    if (Object.keys(datosActualizados).length > 1) {
      // se actualiza el id y si hay mas datos tambien se actualizan
      // en este caso el form captura
      // nombre, estado, rol
      patchUsuarios(id, datosActualizados);
      toast.success("usuario actualizado con exito");
    } else {
      toast.info("No se han hecho cambios");
    }
  };
  // se ordenan los datos para tener siempre actualizada la info
  const form = useRef(null);

  return (
    // no pude cargar los datos en el formulario asi que está vacio
    // si no se cambian los datos o se deja el campo nombre vacio no pasará nada
    // se hace una validacion para saber que se está actualizando
    // no es necesario llenar todos los campos del form
    <div className="paginaActualizacionUsuarios">
      <h1 className="titulo-principal">Gestionar usuarios y roles</h1>
      <section className="form-roles">
        {/* formulario */}
        <form ref={form} onSubmit={enviarAlBackend}>
          <h3 className="titulo-3">Formulario Actualización</h3>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            autoComplete="off"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="actualizar nombre"
            // defaultValue={usuarioActual.nombre}
          />
          <label htmlFor="estado">Estado</label>
          <select
            className="seleccionar"
            name="estado"
            id="estado"
            defaultValue="seleccionar"
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
            defaultValue="seleccionar"
          >
            <option value="seleccionar" disabled>
              seleccione una opción
            </option>
            <option value="vendedor">Vendedor</option>
            <option value="administrador">Administrador</option>
          </select>
          <input className="button" type="submit" value="Enviar" />
        </form>
        {/* notificacion */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </section>
    </div>
  );
}
