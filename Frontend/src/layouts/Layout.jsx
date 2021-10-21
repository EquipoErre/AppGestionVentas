import Menu from "components/NavBar/Menu";
import ListaModulos from "json/menuModuleNames.json";
import { useLocation } from "react-router";
import "styles/layoutPrivado.css";
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerDatosUsuario } from "utils/api";

import React, { useEffect, useState } from "react";
import { useUser } from "context/UserContext";

const Layout = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
    logout,
  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();
  const location = useLocation();
  const [paginaActual, setPaginaActual] = useState(location.pathname);

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // 1. pedir token a auth0
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-equipoerre`,
      });
      // 2. recibir token de auth0
      localStorage.setItem("token", accessToken);
      // console.log(accessToken);
      // 3. enviarle el token a el backend
      await obtenerDatosUsuario(
        (response) => {
          console.log("response con datos del usuario", response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log("err", err);
          setLoadingUserInformation(false);
          logout({ returnTo: "http://localhost:3000/" });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData, logout]);

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    <div className="contenedorPrincipal">
      <header>
        {/* menu recibe una lista de objetos */}
        {/* tambien se puede definirla directamente en esta funcion, 
                esto se hace en publicLayout */}
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
