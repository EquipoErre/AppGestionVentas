import { useAuth0 } from "@auth0/auth0-react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "styles/menu.css";
// este componente se usa en los layouts

// modulosYrutas es una lista de objetos
export default function Menu({ ModulosYRutas, paginaActual, onChange }) {
  // modulos y es una lista de objetos con informacion para cargar
  // se encuentra en la carpeta la info que se carga está en la carpeta json

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const nombraModulos = () => {
    const resultado = [];
    // los enlaces del menu se cargan a traves de una iteracion

    ModulosYRutas.forEach((modulo) => {
      // className={props.pagina === i ? "active" : ""}
      resultado.push(
        <li key={nanoid()}>
          <Link
            to={modulo.ruta}
            className={paginaActual === modulo.ruta ? "active" : "ruta"}
            onClick={() => onChange(modulo.ruta)}
          >
            {modulo.nombre}
          </Link>
        </li>
      );
    });
    resultado.push(
      <li key={nanoid()}>
        {isAuthenticated ? (
          <Link
            to="#!"
            className={`login ruta`}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Cerrar Sesión
          </Link>
        ) : (
          <Link
            to="#!"
            className={`login ruta`}
            onClick={() => loginWithRedirect()}
          >
            Iniciar Sesión
          </Link>
        )}
      </li>
    );
    return resultado;
  };

  return (
    <nav className="lista-enlaces">
      <Link to="/" className="text-decoration-none">
        <div className="contenedor-titulo">
          <h1 className="titulo">R</h1>
        </div>
      </Link>

      <ul className="menu">{nombraModulos()}</ul>
    </nav>
  );
}
