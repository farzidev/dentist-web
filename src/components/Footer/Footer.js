import React, { Component } from "react";
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
                  <Col md={2} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Quick Links
                      <div className="links-header">&nbsp;</div>
                    </h6>

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
                  <Col md={2} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Sitemap
                      <div className="links-header">&nbsp;</div>
                    </h6>
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
                  <Col md={2} sm={6} xs={6} className="footer-social">
                    <h6 className="footer-header">
                      Discover
                      <div className="links-header">&nbsp;</div>
                    </h6>
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
                  <Col md={3} sm={6} xs={6}>
                    <div className="subscribe-form-column">
                      <h6 className="subscribe-header">
                        Subscribe
                        <div className="links-header">&nbsp;</div>
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
                              xs={12}
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
                              xs={12}
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
