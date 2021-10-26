import 'bootstrap/dist/css/bootstrap.css'

import "styles/pages/ventas/ventasIndex.css";
import "styles/components/ventas/componentsTabla.css";
import "styles/components/ventas/componentsBarraBusqueda.css";
import "styles/components/ventas/componentsFormulario.css";
import "styles/components/ventas/componentTablaDescripcionVenta.css";


import VentasIndex from "pages/ventas/VentasIndex";
import DescripcionVenta from "pages/ventas/DescripcionVenta";
import GestionUsuariosPage from "pages/usuarios/GestionUsuariosPage";
import FormularioActualizarUsuario from "pages/usuarios/FormularioActualizacion";
import Layout from "layouts/Layout";
import LoginPage from "pages/login/LoginPage";
import RegisterPage from "pages/login/RegisterPage";
import AuthLayout from "layouts/authLayout";
import PublicLayout from "layouts/publicLayout";
import MaestroProductos from "pages/productos/MaestroProductos";
import ProductoNuevo from "pages/productos/ProductoNuevo";
import Product from "pages/productos/Product"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaVentas from "pages/ventas/ListaVentas"
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from 'components/PrivateRoute';
import React, { useState } from 'react';
import { UserContext } from 'context/UserContext';

function App() {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="equipoerre.us.auth0.com"
      clientId="9OTlnjuVYRbr5TCiEaq8Jc7mNUtzTsOZ"
      redirectUri={window.location.origin}
      audience = "api-autenticacion-equipoerre"
    >
      <div className='App'>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route
                path={[
                  "/usuarios",
                  "/usuarios/:id",
                  "/ventas",
                  "/ventas:id/descripcionVenta",
                  "/ventas/listaVentas",
                  "/productos",
                  "/productoNuevo",
                  "/product"
                ]}
              >
                 <Layout>
                  {/* rutas del modulo de usuarios */}
                  <Switch>
                    <Route path="/usuarios/:id">
                      <PrivateRoute roleList={['administrador']} stateList = {['autorizado']}>
                        <FormularioActualizarUsuario />
                      </PrivateRoute>
                    </Route>
                    <Route path="/usuarios">
                      <PrivateRoute roleList={['administrador']} stateList = {['autorizado']}>
                        <GestionUsuariosPage />
                      </PrivateRoute>
                    </Route>

                    {["/ventas","/ventas/listaVentas", "/ventas:id/descripcionVenta"]}
                    <Route path="/ventas:id/descripcionVenta">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <DescripcionVenta />
                      </PrivateRoute>
                    </Route>
                    <Route path="/ventas/listaVentas">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <ListaVentas/>
                      </PrivateRoute>
                    </Route>
                    <Route path="/ventas">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <VentasIndex />
                      </PrivateRoute>
                    </Route>

                    {/* rutas del modulo productos */}                
                    <Route path="/productos">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <Product />
                      </PrivateRoute>
                    </Route>
                    <Route path="/productoNuevo">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <ProductoNuevo />
                      </PrivateRoute>
                    </Route>
                    <Route path="/producto">
                      <PrivateRoute roleList={['vendedor', 'administrador'] }stateList = {['autorizado']}>
                        <Product />
                      </PrivateRoute>
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
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
