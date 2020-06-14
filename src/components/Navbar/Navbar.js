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
              {/* <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  Services
               </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Invisalign</Dropdown.Item>
                  <Dropdown.Item >Root Canal</Dropdown.Item>
                  <Dropdown.Item >Cosmetic Dentistry</Dropdown.Item>
                  <Dropdown.Item >Extractions</Dropdown.Item>
                  <Dropdown.Item >Dental Braces</Dropdown.Item>
                  <Dropdown.Item >Oral Hygiene</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <div class="dropdown">
                <span class="dropbtn">Services</span>
                <div class="dropdown-content">
                  <Link className="a-navbar-link" to="/services">
                    Invisalign
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Dental Hygiene
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Braces
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Extractions
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Root Canal
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Cavity Repair
                  </Link>
                  <Link className="a-navbar-link" to="/services">
                    Implants
                  </Link>
                </div>
              </div>
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
