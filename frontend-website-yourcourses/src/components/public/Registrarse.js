import React, { Component } from "react";
import "./nohe.css";

// Parametros para el correo electrónico
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validar errores de formulario estando vacía
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validar que el formulario fue llenado
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


 //Creando el constructor y los props para los datos 
class registrarse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: null,
      email: null,
      contrasena: null,
      confirmarContrasena: null,
      formErrors: {
        nombre: "",
        email: "",
        contrasena: "",
        confirmarContrasena: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        nombre: ${this.state.nombre}
        email: ${this.state.email}
        contrasena: ${this.state.contrasena}
        confirmarContrasena: ${this.state.confirmarContrasena}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "nombre":
        formErrors.nombre =
          value.length < 3 ? "Mínimo 3 caracteres requeridos" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Dirección de correo electrónico no válida";
        break;
      case "contrasena":
        formErrors.contrasena =
          value.length < 6 ? "Mínimo 6 caracteres requeridos" : "";
        break;
        case "confirmarContrasena":
        formErrors.confirmarContrasena =
          value.length < 6 ? "Mínimo 6 caracteres requeridos" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Crear Cuenta</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="nombre">
              <label htmlFor="nombre">Nombre</label>
              <input
                className={formErrors.nombre.length > 0 ? "error" : null}
                placeholder="Nombre"
                type="text"
                name="nombre"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.nombre.length > 0 && (
                <span className="errorMessage">{formErrors.nombre}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Correo Electrónico"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="contrasena">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                className={formErrors.contrasena.length > 0 ? "error" : null}
                placeholder="Contraseña"
                type="contrasena"
                name="contrasena"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.contrasena.length > 0 && (
                <span className="errorMessage">{formErrors.contrasena}</span>
              )}
            </div>
            <div className="confirmarContrasena">
              <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
              <input
                className={formErrors.contrasena.length > 0 ? "error" : null}
                placeholder="Confirmar Contraseña"
                type="confirmarContrasena"
                name="confirmarContrasena"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.contrasena.length > 0 && (
                <span className="errorMessage">{formErrors.contrasena}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Crear Cuenta</button>
              <small>Ya tienes una cuenta?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default registrarse;