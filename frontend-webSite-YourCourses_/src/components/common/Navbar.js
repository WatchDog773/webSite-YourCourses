import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import Mystyles from "./Mystyle";

const NavBar = () => {
  let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }

  return (
    <Mystyles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">Your Courses</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#courses">Cursos</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item>
              <Button variant='info' onClick={(e) => {setRedirect("/login"); }}>Acceder</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Mystyles>
  );
};

export default NavBar;
