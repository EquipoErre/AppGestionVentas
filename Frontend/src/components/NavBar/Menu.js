import { Link } from "react-router-dom";

// este componente se usa en los layouts

// modulosYrutas es una lista de objetos
export default function Menu({ ModulosYRutas, paginaActual, onChange }) {
  // modulos y es una lista de objetos con informacion para cargar
  // se encuentra en la carpeta la info que se carga está en la carpeta json

  const nombraModulos = () => {
    const resultado = [];
    // los enlaces del menu se cargan a traves de una iteracion
    
    ModulosYRutas.forEach((modulo) => {
      // className={props.pagina === i ? "active" : ""}
      resultado.push(
        <li key={modulo.id}>
          <Link to={modulo.ruta} className={paginaActual === modulo.ruta ? "active" : "ruta"} onClick= {() => onChange(modulo.ruta)}>
            {modulo.nombre}
          </Link>
        </li>
      );
    }
    
    );
    return resultado;
  };

  return (
    <nav className="lista-enlaces">
      <Link to="/">
        <h1 className="titulo">Gestion de Ventas</h1>
      </Link>

      <ul className="menu">{nombraModulos()}</ul>
    </nav>
  );
}
