import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import imgNotFound from "./notFound.png";

const NotFound = () => {
  let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Row >
          <h1 className="mx-auto mt-5">Oops!</h1>
        </Row>
        <Row xs={50} md={50} sm={4}  className="justify-content-md-center" >
            <img src={imgNotFound} rounded/> 
        </Row>
        <Row>
          <h2 className="mx-auto">No lo pudimos encontrar</h2>
        </Row>
        <Row>
          <div className="mx-auto">
            <Button
              onClick={(e) => {
                setRedirect("/");
              }}
            >
              Volver
            </Button>
          </div>
        </Row>
      </Container>  
     
      <Footer />
    </div>
  );
};

export default NotFound;
