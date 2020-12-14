import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useStateContext } from "../../utilities/Context";
import BackToLogin from "../common/ButtonBackLogin";
import ButtonExit from "../common/ButtonExit";

import { Navbar, Nav, Button } from "react-bootstrap";
//import Mystyles from "./Mystyle";

const NavBar = () => {
  const [{ auth }] = useStateContext();

  const navButtonsNoUser = (
    <Navbar collapseOnSelect bg="light" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Your Courses</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <BackToLogin />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const navButtonsUser = (
    <Navbar collapseOnSelect bg="light" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Your Courses</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#courses">Agregar un curso</Nav.Link>
          <Nav.Link href="#courses">Mis inscripciones</Nav.Link>
          <Nav.Link href="#courses">Mis cursos</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <ButtonExit />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  if (auth.logged) {
    return navButtonsUser;
  } else {
    return navButtonsNoUser;
  }
};

export default NavBar;
