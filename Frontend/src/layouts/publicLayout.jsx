import Menu from "components/NavBar/Menu";
import { useState } from "react";
import "styles/layoutPrivado.css";

const Layout = ({ children }) => {
  const [paginaActual, setPaginaActual] = useState("/");

  return (
    <div>
      <header>
        <Menu
          paginaActual={paginaActual}
          onChange={(pagina) => setPaginaActual(pagina)}
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
