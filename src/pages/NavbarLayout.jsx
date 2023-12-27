import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <>
      <Navbar expand="lg" className="comp-color">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="public/logo.png" alt="logo" style={{ maxWidth: "75px" }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/tasks">
                <b>Tasks</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/friends">
                <b>My Friends</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/habits">
                <b>Habits</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarLayout;
