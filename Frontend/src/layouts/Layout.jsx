import Menu from "components/NavBar/Menu"
import ListaModulos from "json/menuModuleNames.json"
import { useState } from "react";

const Layout = ({children}) => {

    const [paginaActual, setPaginaActual] = useState('/usuarios');
    return (
        <div className='contenedorPrincipal'>
            <header>
                {/* menu recibe una lista de objetos */}
                {/* tambien se puede definirla directamente en esta funcion, 
                esto se hace en publicLayout */}
                <Menu ModulosYRutas={ListaModulos} paginaActual={paginaActual}
          onChange={(pagina) => setPaginaActual(pagina)}/>
            </header>
            <main>
            {children}
            </main>        
        </div>
    )
}

export default Layout