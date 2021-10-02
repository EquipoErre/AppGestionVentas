import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GestionUsuariosPage from "pages/usuarios/GestionUsuariosPage";
import FormularioActualizarUsuario from "components/UsuariosYRoles/Formulario";
import Layout from "layouts/Layout";
import LoginPage from "pages/login/LoginPage";
import RegisterPage from "pages/login/RegisterPage";
import AuthLayout from "layouts/authLayout";
import PublicLayout from "layouts/publicLayout"
function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/usuarios", "/usuarios/:id", "/ventas", "/productos"]}>
          <Layout>
            {/* rutas del modulo de usuarios */}
            <Switch>
              <Route path="/usuarios/:id">
                <FormularioActualizarUsuario />
              </Route>
              <Route path="/usuarios">
                <GestionUsuariosPage />
              </Route>

              {/* rutas del modulo de ventas */}
              <Route path="/ventas">
                <h1>Ventas</h1>
              </Route>

              {/* rutas del modulo de productos */}
              <Route path="/productos">
                <h1>Productos</h1>
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
