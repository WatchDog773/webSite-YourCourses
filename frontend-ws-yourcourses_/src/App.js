//import logo from './logo.svg';
import "./App.css";
// Importar el nav
import Home from "./components/public/Home";
import LogIn from "./components/public/Login_";
import StartIt from "./components/public/Start";
import SignUp from "./components/public/Registrarse";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/productos" exact component={StartIt} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
