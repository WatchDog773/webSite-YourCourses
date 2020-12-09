import { useState } from "react";
import { Redirect, Link, useHistory, useLocation } from "react-router-dom";
import "./nohe.css"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Button, Card } from "react-bootstrap";

const Registrate = () => {
  let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }
  return (
    <div className="wrapper">
        <div className="form-wrapper">
            <h1>Crea tu cuenta</h1>
            <form onSubmit={this.handlesubmit} noValidate>
                <div className="nombre">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" 
                    className="" 
                    placeholder="Nombre" 
                    type="text" 
                    name="nombre"
                    noValidate
                    onChange={this.handlesubmit}
                    />
                </div>
                <div className="CorreoElectrónico">
                    <label htmlFor="CorreoElectrónico">Correo Electrónico</label>
                    <input type="text" 
                    className="" 
                    placeholder="CorreoElectrónico" 
                    type="text" 
                    name="CorreoElectrónico"
                    noValidate
                    onChange={this.handlesubmit}
                    />
                </div>
                <div className="Contraseña">
                    <label htmlFor="Contraseña">Contraseña</label>
                    <input type="text" 
                    className="" 
                    placeholder="Contraseña" 
                    type="text" 
                    name="Contraseña"
                    noValidate
                    onChange={this.handlesubmit}
                    />
                </div>
                <div className="ConfirmarContraseña">
                    <label htmlFor="ConfirmarContraseña">Confirmar Contraseña</label>
                    <input type="text" 
                    className="" 
                    placeholder="ConfirmarContraseña" 
                    type="text" 
                    name="ConfirmarContraseña"
                    noValidate
                    onChange={this.handlesubmit}
                    />
                </div>
            </form>
        </div> 
    </div>
  );
};

export default Registrate;