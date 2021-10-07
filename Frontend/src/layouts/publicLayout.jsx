import Menu from "components/NavBar/Menu"
let ListaModulos = [
    {
        "id":"001",
       "nombre":"Iniciar Sesion",
       "ruta":"/login" 
    },
    {
        "id":"001",
       "nombre":"Modulos",
       "ruta":"/usuarios" 
    }
]
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