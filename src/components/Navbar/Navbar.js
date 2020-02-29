import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        className="navbar-element"
        expand="xl"
        variant="light"
      >
        <Navbar.Brand>
          <Link className="a-navbar-link" to="/">
            <b>DentistWeb</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/*margin-left-auto */}
            <Nav.Link className="hover-class-header" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#aboutus">
              AboutUs
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#ourworks">
              Our Works
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#pages">
              Pages
            </Nav.Link>
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/blogs">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#contact">
              Contact&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Link to="/founddoctors">
              <Button className="book-now-btn">Book Now</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
