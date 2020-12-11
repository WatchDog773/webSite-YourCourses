/*import { useState } from "react";
import { Redirect, Link, useHistory, useLocation } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Button, Card } from "react-bootstrap";
*/
import imgLogin from './login.svg';
import './Login&signUp.css';

const LogIn = () => {
  /*let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }*/
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
          <form action="#" className="sign-in-form">
          <h2 className="title">Iniciar sesión</h2>
          <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nombre usuario" />
          </div>
          <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
          </div>
          <input type="submit" value="Iniciar sesión" className="btn solid" />
          <p className="social-text">Encuentranos en nuestras redes sociales</p>
          <div className="social-media">
              <a href="#" class="social-icon">
              <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
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
