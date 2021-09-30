import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from 'pages/login.page.compontent';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <LoginPage></LoginPage>
    </div>
  </Router>
  );
}

export default App;
