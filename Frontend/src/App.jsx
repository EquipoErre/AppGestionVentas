import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import stylesComponentsTabla from 'styles/components/ventas/componentsTabla.css'
import stylesComponentsBarraBusqueda from 'styles/components/ventas/componentsBarraBusqueda.css'
import stylesComponentsFormulario from 'styles/components/ventas/componentsFormulario.css'
import VentasIndex from "pages/ventas/VentasIndex"
import VentanaDescrpcionVenta from "pages/ventas/VentanaDescrpcionVenta";
import styleTabladescripcionVenta from 'styles/components/ventas/componentTablaDescripcionVenta.css'
import GestionUsuariosPage from "pages/usuarios/GestionUsuariosPage";
import FormularioActualizarUsuario from "components/UsuariosYRoles/Formulario";
import Layout from "layouts/Layout";
import LoginPage from "pages/login/LoginPage";
import RegisterPage from "pages/login/RegisterPage";
import AuthLayout from "layouts/authLayout";
import PublicLayout from "layouts/publicLayout"
import MaestroProductos from "pages/productos/MaestroProductos";
import ProductoNuevo from "pages/productos/ProductoNuevo";


function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/usuarios", "/usuarios/:id", "/ventas", "/productos", "/productoNuevo", "/ventas:codigo/descripcionVenta"]}>
          <Layout>
            {/* rutas del modulo de usuarios */}
            <Switch>
              <Route path="/usuarios/:id">
                <FormularioActualizarUsuario />
              </Route>
              <Route path="/usuarios">
                <GestionUsuariosPage />
              </Route>

              {["/ventas","/ventas:codigo/descripcionVenta"]}
              <Route path="/ventas:codigo/descripcionVenta">
                <VentanaDescrpcionVenta/>
              </Route>
              <Route path="/ventas">
                <VentasIndex/>
              </Route>

              {/* rutas del modulo productos */}
              <Route path="/productos">
                <MaestroProductos/>
              </Route>
              <Route path="/productoNuevo">
                <ProductoNuevo />
              </Route>

            </Switch>
          </Layout>
        </Route>

        {/* rutas para el modulo de registro e inicio de sesion */}
        <Route path={["/login", "/register"]}>
          <AuthLayout>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
          </AuthLayout>
        </Route>
          
        <Route path={["/"]}>
          <PublicLayout>
          <Switch>
            <Route exact path="/">
            <h1>Inicio</h1>
            </Route>
          </Switch>
          </PublicLayout>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
