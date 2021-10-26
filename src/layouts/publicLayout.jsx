import PublicMenu from "components/NavBar/PublicMenu";
import { useState } from "react";
import "styles/layoutPrivado.css";

const Layout = ({ children }) => {
  const [paginaActual, setPaginaActual] = useState("/");

  return (
    <div>
      <header>
        <PublicMenu
          publico = {true}
          paginaActual={paginaActual}
          onChange={(pagina) => setPaginaActual(pagina)}
        />
      </header>
      <main>{children}</main>
    </div>
    
  );
};

export default Layout;
