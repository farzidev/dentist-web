import React, { Component } from "react";
import "./Footer.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Row noGutters={true}>
          <Col md={1}></Col>
          <Col md={10} className="main-working-column">
            <div>
              <Row noGutters>
                <Col md={3} className="footer-social">
                  <div>
                    <img
                      className="footer-teeth-image"
                      src="/assets/images/footerTooth.png"
                      alt="Teeth"
                      height="42"
                      width="70"
                    />
                    <h3>Dentist Web</h3>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                  </div>
                </Col>
                <Col md={2} className="footer-social">
                  <h6>Quick Links</h6>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Home</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;About Us</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Services</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Testimonials</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Contact Us</a>
                  <br />
                </Col>
                <Col md={2} className="footer-social">
                  <h6>Sitemap</h6>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Our Process</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;What We Do</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Location</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Lorem</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Ipsum</a>
                  <br />
                </Col>
                <Col md={2} className="footer-social">
                  <h6>Discover</h6>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Privacy Policy</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Terms & Conditions</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Lorem</a>
                  <br />
                  <a href="#">-&nbsp;&nbsp;Ipsum</a>
                  <br />
                </Col>
                <Col md={3}>
                  <h6>&nbsp;&nbsp;&nbsp;&nbsp;Subscribe</h6>
                  <br />
                  <br />
                  <div className="footer-subscribe-form">
                    <Form>
                      <Form.Row controlId="formPlaintextEmail">
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            placeholder="E-mail"
                            size="sm"
                          />
                        </Col>
                        <Col sm="2">
                          <Button size="sm" variant="success">
                            Subscribe
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <hr />
        <p className="footer-end">
          Copyright © 2019 Dental Web. All rights reserved.
        </p>
      </div>
    );
  }
}
