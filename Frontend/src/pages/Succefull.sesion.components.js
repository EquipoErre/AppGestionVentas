import {  Switch, Route} from "react-router-dom";
import Menu from 'components/NavBar/Menu';
import TablaUsuariosYRoles from "../components/UsuariosYRoles/TablaUsuariosYRoles";
import Formulario from "../components/UsuariosYRoles/Formulario";
export default function SucefullSession() {
  let path = [
    {
      id: "01",
      nombre: "ventas",
      ruta: "/ventas",
    },
    {
      id: "02",
      nombre: "usuarios",
      ruta: "/usuarios",
    },
    {
      id: "03",
      nombre: "vendedores",
      ruta: "/vendedores", 
    }
  ];
  return (
    <>
      <Menu ModulosYRutas={path} />
      <Switch>
        <Route path="/usuarios/:id">
          <Formulario />
        </Route>
        <Route path="/ventas">
          <h1>Ventas</h1>
        </Route>
        <Route path="/usuarios">
          <TablaUsuariosYRoles />
        </Route>
        <Route path="/">
          <h1>Inicio</h1>
        </Route>
      </Switch>
    </>
  );
}
