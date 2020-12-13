import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
/*import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import { Button } from "react-bootstrap";

import imgLogin from "./login.svg";
import "./Login&signUp.css";
import { useStateContext } from "../../utilities/Context";

import {
  LOGIN_FETCHING,
  LOGIN_FETCHING_FAILED,
  LOGIN_SUCCESS,
} from "../../utilities/store/reducers/auth.reducer";

import axios from "axios";

const LogIn = () => {
  /*let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }*/

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [, dispath] = useStateContext();
  const routeHistory = useHistory();
  const location = useLocation();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, //spread Operator
      [name]: value,
    });
  };

  // La accion del boton
  let { from } = location.state || { from: { pathname: "/startit" } };
  const onLogin = (e) => {
    const { email, password } = form;
    console.log(email);
    console.log(password);
    dispath({ type: LOGIN_FETCHING });
    axios
      .post("/auth/login", { email, password })
      .then(({ data }) => {
        //console.log(data);
        dispath({ type: LOGIN_SUCCESS, payload: data });
        routeHistory.replace(from);
      })
      .catch((error) => {
        dispath({ type: LOGIN_FETCHING_FAILED });
        console.log(error);
      });
  };

  return (
    /*
    <Container className="my-5">
      <Card>
        <div className="m-3">
          <FontAwesomeIcon
            onClick={(e) => {
              setRedirect("/");
            }}
            icon={faArrowLeft}
          />
        </div>
        <Container className="p-4">
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Corro Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </Form.Group>
              <div className="mx-auto" style={{ width: "200px" }}>
                <Button variant="primary" type="submit">
                  Iniciar Sesión
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </Card>
    </Container>
    */
    /**LOGIN */

    <div className="container1">
      <div className="forms-container1">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Iniciar sesión</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="email" // 1. Primero el name Tiene que ir asi para que lea la escritura
                onChange={onChange} // 2. Luego el onChange
                value={form.email} // 3. Luego el valor para que este capture
                type="email"
                placeholder="Nombre usuario"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                value={form.password}
                onChange={onChange}
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <Button onClick={onLogin} className="btn solid">
              Iniciar Sesión
            </Button>
            <p className="social-text">
              Encuentranos en nuestras redes sociales
            </p>
            <div className="social-media">
              <a class="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿ Nuevo aquí ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn" id="sign-up-btn">
              Crear cuenta
            </button>
          </div>
          <img src={imgLogin} className="image" alt="imagen del login" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
