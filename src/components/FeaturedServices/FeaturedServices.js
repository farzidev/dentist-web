import React, { Component } from "react";
import "./FeaturedServices.css";
import { Row, Col, Image } from "react-bootstrap";

export default class FeaturedServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4, 5]
    };
  }
  render() {
    return (
      <div className="featured-services-container">
        <div className="featured-services-division">
          <div className="featured-services-title">
            <h3>FEATURED SERVICES</h3>
          </div>
          <hr />
          <div className="featured-services-text">
            <span className="featured-services-text-content">
              We offer various services to treat your dental conditions to give
              you a bright happy smile.
            </span>
          </div>
          <br />
          <div className="featured-services-images-container">
            <Row noGutters>
              <Col lg={12}>
                <Row className="featured-services-items-images">
                  {this.state.items.map((item, index) => {
                    return (
                      <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                        <div className="services-circles">
                          <Image
                            className="services-circle-image"
                            src="/assets/images/cleanTooth.png"
                            alt="braces"
                          />
                        </div>
                        <h6 className="circle-image-description">
                          TOOTH CLEANING & WHITENING
                        </h6>
                      </Col>
                    );
                  })}
                </Row>
                <br />
                <br />
                <Row className="featured-services-items-images">
                  {this.state.items.map((item, index) => {
                    return (
                      <Col xl={2} lg={2} md={3} sm={6} xs={12}>
                        <div className="services-circles">
                          <Image
                            className="services-circle-image"
                            src="/assets/images/cleanTooth.png"
                            alt="braces"
                          />
                        </div>
                        <h6 className="circle-image-description">
                          TOOTH CLEANING & WHITENING
                        </h6>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
