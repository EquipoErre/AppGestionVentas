import Menu from "components/NavBar/Menu";
import { useState } from "react";
import ListaModulos from "json/menuModuleNames.json";
import "styles/layoutPrivado.css";

const Layout = ({ children }) => {
  const [paginaActual, setPaginaActual] = useState("/");

  return (
    <div>
      <header>
        <Menu
          ModulosYRutas={ListaModulos}
          paginaActual={paginaActual}
          onChange={(pagina) => setPaginaActual(pagina)}
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
