import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "components/PrivateComponent";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "styles/menu.css";
// este componente se usa en los layouts

// modulosYrutas es una lista de objetos
export default function PublicMenu({ paginaActual = "/", onChange }) {
  // modulos y es una lista de objetos con informacion para cargar
  // se encuentra en la carpeta la info que se carga está en la carpeta json

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="lista-enlaces">
      <Link to="/" className="text-decoration-none">
        <div className="contenedor-titulo">
          <h1 className="titulo">R</h1>
        </div>
      </Link>
      

      <ul className="menu">
      <li key={nanoid()}>
            <Link
              to="/nosotros"
              className={paginaActual === "/nosotros" ? "active" : "ruta"}
              onClick={() => onChange("/nosotros")}
            >
              sobre nosotros
            </Link>
          </li>
        {isAuthenticated && (
          <li key={nanoid()}>
            <Link
              to="/ventas"
              className={paginaActual === "/ventas" ? "active" : "ruta"}
              onClick={() => onChange("/ventas")}
            >
              modulos
            </Link>
          </li>
        )}

        {isAuthenticated ? (
          <li key={nanoid()}>
            <Link
              to="#!"
              className={`login ruta`}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Cerrar Sesión
            </Link>
          </li>
        ) : (
          <li key={nanoid()}>
            <Link
              to="#!"
              className={`login ruta`}
              onClick={() => loginWithRedirect()}
            >
              Iniciar Sesión
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
