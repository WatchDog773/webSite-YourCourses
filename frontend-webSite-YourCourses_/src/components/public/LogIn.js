import { useState } from "react";
import { Redirect, Link, useHistory, useLocation } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Button, Card } from "react-bootstrap";

const LogIn = () => {
  let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }
  return (
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
  );
};

export default LogIn;
