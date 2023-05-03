import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" variant="light" bg="light">
      <Container>
        <NavbarBrand>eDictionary</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};
