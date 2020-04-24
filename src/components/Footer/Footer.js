import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { Col, Row, Form, Button, Image } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-inner-container">
          <Row className="footer-base-row">
            <Col md={1}></Col>
            <Col md={10} className="main-working-column">
              <div>
                <Row>
                  <Col md={3} sm={12} xs={12} className="footer-social">
                    <div>
                      <div className="footer-title-image-social">
                        <img
                          className="footer-teeth-image"
                          src="/assets/images/footerTooth.png"
                          alt="Teeth"
                          height="42"
                          width="70"
                        />
                        <h3 className="footer-title">Dentist Web</h3>
                        <Image
                          src="/assets/images/facebook.svg"
                          height="30"
                          width="30"
                        />
                        &nbsp;&nbsp;
                        <Image
                          src="/assets/images/twitter.svg"
                          height="30"
                          width="30"
                        />
                        &nbsp;&nbsp;
                        <Image
                          src="/assets/images/googleplus.svg"
                          height="30"
                          width="30"
                        />
                        &nbsp;&nbsp;
                        <Image
                          src="/assets/images/instagram.svg"
                          height="30"
                          width="30"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Quick Links
                      <div className="links-header">&nbsp;</div>
                    </h6>
                    <br />
                    <div className="footer-links-div">
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        -&nbsp;&nbsp;Home
                      </Link>
                    </div>
                    <div className="footer-links-div">
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        -&nbsp;&nbsp;About&nbsp;Us
                      </Link>
                    </div>
                    <div className="footer-links-div">
                      <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        -&nbsp;&nbsp;Services
                      </Link>
                    </div>
                    <div className="footer-links-div">
                      <Link
                        activeClass="active"
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={900}
                      >
                        -&nbsp;&nbsp;Testimonials
                      </Link>
                    </div>
                    {/* <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Contact Us</a>
                      <br />
                    </div> */}
                  </Col>
                  {/* <Col md={2} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Sitemap
                      <div className="links-header">&nbsp;</div>
                    </h6>
                    <br />
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Our Process</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;What We Do</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Location</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Lorem</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Ipsum</a>
                      <br />
                    </div>
                  </Col> */}
                  <Col md={3} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Discover
                      <div className="links-header">&nbsp;</div>
                    </h6>
                    <br />
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Privacy Policy</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Terms & Conditions</a>
                      <br />
                    </div>
                    {/* <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Lorem</a>
                      <br />
                    </div>
                    <div className="footer-links-div">
                      <a href="#some-link" className="footer-links">-&nbsp;&nbsp;Ipsum</a>
                      <br />
                    </div> */}
                  </Col>
                  <Col md={3} sm={12} xs={12}>
                    <div className="subscribe-form-column">
                      <h6 className="subscribe-header">
                        Subscribe
                        <div className="links-header border-remove-subs">&nbsp;</div>
                      </h6>
                      <br />
                      <br />
                      <div className="footer-subscribe-form">
                        <Form>
                          <Form.Row controlId="formPlaintextEmail">
                            <Col
                              xl={8}
                              lg={8}
                              md={8}
                              sm={8}
                              xs={8}
                              className="subscribe-input-box"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Email Address"
                                size="sm"
                                className="subscribe-form-control"
                              />
                            </Col>
                            <Col
                              xl={4}
                              lg={4}
                              md={4}
                              sm={4}
                              xs={4}
                              className="subscribe-input-box"
                            >
                              <Button size="sm" className="subscribe-btn">
                                Subscribe
                              </Button>
                            </Col>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
          <p className="footer-end">
            Copyright © 2019 Dental Web. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
