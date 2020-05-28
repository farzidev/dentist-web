import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        className="navbar-element-1"
        expand="xl"
        variant="light"
      >
        <Navbar.Brand className="dentist-web-logo">
          <Link className="a-navbar-link" to="/">
            <img
              className="footer-teeth-image"
              src="/assets/images/footerTooth.png"
              alt="Teeth"
              height="30"
              width="50"
            />
            <b>&nbsp;DentistWeb</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/*margin-left-auto */}
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/about-us">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/services">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/founddoctors">
                Locations
              </Link>
            </Nav.Link>
            {/* <Nav.Link className="hover-class-header" href="#ourworks">
              Our Works
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#pages">
              Pages
            </Nav.Link> */}
            <Nav.Link className="hover-class-header">
              <Link className="a-navbar-link" to="/blogs">
                Blog&nbsp;&nbsp;&nbsp;&nbsp;
              </Link>
            </Nav.Link>
            {/* <Nav.Link className="hover-class-header" href="#contact">
              Contact&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav.Link> */}
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Link className="a-navbar-link" to="/founddoctors">
              <Button className="book-now-btn">Book Now</Button>
            </Link>
          </Form>
        </Navbar.Collapse >
      </Navbar >
    );
  }
}
