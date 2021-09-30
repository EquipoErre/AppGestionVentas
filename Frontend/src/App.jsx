
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/UsuariosYRoles.css";

import LoginPage from "pages/login.page.compontent";
import { BrowserRouter as Router } from "react-router-dom";
import Modulos from "pages/Succefull.sesion.components";

function App() {
  let userSesion = 'null';
  return (
    <Router>
      {userSesion === null && <LoginPage />}
      {userSesion !== null && <Modulos />}
    </Router>
  );
}

export default App;
