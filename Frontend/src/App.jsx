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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/descripcionVenta'>
            <VentanaDescrpcionVenta/>
          </Route>
          <Route path='/'>
            <VentasIndex/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
