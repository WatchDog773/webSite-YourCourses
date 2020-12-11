//import logo from './logo.svg';
import "./App.css";
// Importar el nav
import Home from "./components/public/Home";
import LogIn from "./components/public/LogIn";
import SingUp from "./components/public/SignUp"
import StartIt from "./components/public/Start";
import NotFound from "./components/public/NotFound";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/productos" exact component={StartIt} />
          <Route path="/singup" exact component={SingUp}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
