import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo2 from "../logo2.png";
import Container from 'react-bootstrap/Container'
const Header = () => {
  return (
    <header>
      <Navbar
        className="trela py-"
        fixed="top"
        style={{ backgroundColor: "#fafafa" }}
        expand="sm"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo2}
            height="30px"
            className="d-inline-block align-top pl-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </header>

  );
};

export default Header;
