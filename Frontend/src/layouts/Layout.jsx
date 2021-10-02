import Menu from "components/NavBar/Menu"
import ListaModulos from "json/menuModuleNames.json"

const Layout = ({children}) => {
    return (
        <div >
            <header>
                <Menu ModulosYRutas={ListaModulos}/>
            </header>
            <main>
            {children}
            </main>        
        </div>
    )
}

export default Layout