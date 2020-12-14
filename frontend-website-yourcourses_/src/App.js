//import logo from './logo.svg';
import "./App.css";
import { StateProvider } from "./utilities/Context";
import mainReducer from "./utilities/store/Store";

// Importar el nav
import Home from "./components/public/Home";
import LogIn from "./components/public/LogIn";
import SingUp from "./components/public/SignUp";
import StartIt from "./components/private/Start";
import NotFound from "./components/public/NotFound";
import Splash from "./components/public/Splash";
import Courses from "./components/private/Courses";
import AddCourse from "./components/private/AddCourse";
import OneCourse from "./components/private/Lessons";
import MyCourses from "./components/private/MyCourses";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRouter from "./utilities/PrivateRouter";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let appState = mainReducer();
  return (
    <StateProvider initialState={appState} reducer={mainReducer}>
      <div>
        <Router>
          <Splash>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LogIn} />
              <Route path="/signup" exact component={SingUp} />

              <PrivateRouter path="/startit" exact component={StartIt} />
              <PrivateRouter path="/courses" exact component={Courses} />
              <PrivateRouter path="/new" exact component={AddCourse} />
              <PrivateRouter path="/courses/one" exact component={OneCourse} />
              <PrivateRouter path="/myCourses" exact component={MyCourses} />

              <Route path="*" component={NotFound} />
            </Switch>
          </Splash>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
