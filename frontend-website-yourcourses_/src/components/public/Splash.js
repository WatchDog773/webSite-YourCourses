import { useEffect } from "react";
import { useStateContext } from "../../utilities/Context";
import { paxios, setJWT, setUnAuthInterceptor } from "../../utilities/Axios";
// import { Redirector } from "../common/Redirector";
import ButtonExit from "../common/ButtonExit";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Card} from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";

import { APP_INIT, APP_MIN } from "../../utilities/store/reducers/app.reducer";
import { JWT_INVALID } from "../../utilities/store/reducers/auth.reducer";
//import Page from '../cmns/Page';
import { useHistory, useLocation } from "react-router-dom";

import ButtonBackLogin from "../common/ButtonBackLogin";
import { Container } from "react-bootstrap";

const Splash = ({ children }) => {
  //
  const [{ app, auth }, dispatch] = useStateContext();
  const routeHistory = useHistory();
  const routeLocation = useLocation();

  useEffect(() => {
    if (!app.initialized) {
      setTimeout(() => {
        dispatch({ type: APP_MIN });
      }, 0);
      appInit(auth, dispatch, { routeHistory, routeLocation });
    }
  }, []);
  console.log(app.minTimeElapsed);
  if (!app.initialized && app.minTimeElapsed) {
    return (
      <div>
        <CardDeck> 
          <Card className="text-center m-3">
              <Card.Footer></Card.Footer>
              <Navbar />
              <Container>
                <h1>
                  ¡Oops Algo salio mal! 
                </h1>
                <h2>No pudimos reconocerte, por favor inicia sesión</h2>
                <ButtonExit contenido="Volver al inicio"></ButtonExit>
              </Container>
            </Card>
        </CardDeck> 
        <Footer />
      </div>
    );
  } else {
    return <section>{children}</section>;
  }
};
const unAuth = (dispatch, { routeLocation }) => {
  return () => {
    dispatch({ type: JWT_INVALID, payload: { to: routeLocation.pathname } });
  };
};
const appInit = async (auth, dispatch, routeHooks) => {
  //Setting unAuth
  setUnAuthInterceptor(unAuth(dispatch, routeHooks));

  if (auth.jwt === "" || auth.logged === false) {
    dispatch({ type: APP_INIT });
  } else {
    try {
      setJWT(auth.jwt);
      await paxios.get("/api/heartbeat");
      dispatch({ type: APP_INIT });
    } catch (e) {
      console.log(e);
    }
  }
};

export default Splash;
