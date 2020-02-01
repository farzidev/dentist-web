import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        className="navbar-element"
        expand="xl"
        variant="light"
      >
        <Navbar.Brand href="#home">
          <b>DentistWeb</b>
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
            <Nav.Link className="hover-class-header" href="#blog">
              Blog
            </Nav.Link>
            <Nav.Link className="hover-class-header" href="#contact">
              Contact&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Button className="book-now-btn">Book Now</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
