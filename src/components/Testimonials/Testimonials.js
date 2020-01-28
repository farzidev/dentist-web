import React, { Component } from "react";
import { Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-division">
        <Row className="testimonials-base-row">
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Carousel controls={false}>
              <CarouselItem>
                <Row>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="testimonials-left-col-1"
                  >
                    <div className="testimonial-card-1">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="testimonials-left-col-2"
                  >
                    <div className="testimonial-card-2">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                </Row>
              </CarouselItem>
              <CarouselItem>
                <Row>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="testimonials-left-col-1"
                  >
                    <div className="testimonial-card-1">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="testimonials-left-col-2"
                  >
                    <div className="testimonial-card-2">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                </Row>
              </CarouselItem>
              <CarouselItem>
                <Row>
                  <Col md={6} className="testimonials-left-col-1">
                    <div className="testimonial-card-1">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                  <Col md={6} className="testimonials-left-col-2">
                    <div className="testimonial-card-2">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" />
                      <hr />
                      <span className="testimonial-card-content">
                        We thrive to create the best experience for everyone who
                        comes to us.We thrive to create the best experience for
                        everyone who comes to us.
                      </span>
                    </div>
                  </Col>
                </Row>
              </CarouselItem>
            </Carousel>
          </Col>
          <Col md={8} lg={8}>
            <div className="testimonials-right-col-div">
              <div>
                <h6>Client About Us</h6>
                <h2>Testimonial</h2>
                <ul>
                  <li>
                    We thrive to create the best experience for everyone who
                    comes to us.
                  </li>
                  <li>
                    We thrive to create the best experience for everyone who
                    comes to us.
                  </li>
                  <li>
                    We thrive to create the best experience for everyone who
                    comes to us.
                  </li>
                  <li>
                    We thrive to create the best experience for everyone who
                    comes to us.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
