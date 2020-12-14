import { useState } from "react";
import { useStateContext } from "../../utilities/Context";
// import { paxios } from "../../utilities/Axios";
import { useHistory } from "react-router-dom";
import imgRegister from "./register.svg";
import "./Login&signUp.css";

import ButtonGeneral from "../common/ButtonGeneral";

import axios from "axios";

import {
  SIGNIN_FETCHING,
  SIGNIN_FETCHING_FAILED,
  SIGNIN_SUCCES,
  SIGNIN_END,
} from "../../utilities/store/reducers/auth.reducer";
import { Button } from "react-bootstrap";

const SingUp = () => {
  const [, dispatch] = useStateContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordVerify: "",
  });
  const history = useHistory();
  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const addNewUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: SIGNIN_FETCHING });
    axios
      .post("api/auth/signin", form)
      .then((data) => {
        console.log(data);
        dispatch({ type: SIGNIN_SUCCES });
        history.push("/login");
      })
      .catch((ex) => {
        console.log(ex);
        dispatch({ type: SIGNIN_FETCHING_FAILED });
        alert("Algo salio mál al registrar");
      });
  };

  return (
    <div className="container1">
      <div className="forms-container1">
        <div className="signin-signup">
          <form
            style={{ "align-items": "center" }}
            action="#"
            className="sign-in-form"
          >
            <h2 className="title">Crear cuenta</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                onChange={onChange}
                value={form.email}
                type="email"
                placeholder="Correo electrónico"
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
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="passwordVerify"
                value={form.passwordVerify}
                onChange={onChange}
                type="password"
                placeholder="Verifica tu contraseña"
              />
            </div>
            <Button onClick={addNewUser} className="btn solid">
              Crear cuenta
            </Button>
            <p className="social-text">
              Encuentranos en nuestras redes sociales
            </p>
            <div className="social-media">
              <a className="social-icon">
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
            <h3>¿ Uno de nosotros?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <ButtonGeneral contenido="Iniciar Sesión" ruta="/login" />
          </div>
          <img src={imgRegister} className="image" alt="imagen del registro" />
        </div>
      </div>
    </div>
  );
};
export default SingUp;
