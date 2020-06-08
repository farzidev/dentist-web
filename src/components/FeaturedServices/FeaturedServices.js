import React, { Component } from "react";
import "./FeaturedServices.css";
import { Row, Col, Image } from "react-bootstrap";
import { ServiceOne, ServiceTwo, ServiceThree, ServiceFour, ServiceFive, ServiceSix, ServiceSeven, ServiceEight, ServiceNine, ServiceTen, ServiceEleven, ServiceTwelve } from "../../svg-images/ServicesSVG";
import { Link } from "react-router-dom";

export default class FeaturedServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4, 5],
      images_array_1: [
        <ServiceOne />, <ServiceTwo />, <ServiceThree />, <ServiceFour />, <ServiceFive />, <ServiceSix />
      ],
      images_array_2: [
        <ServiceSeven />, <ServiceEight />, <ServiceNine />, <ServiceTen />, <ServiceEleven />, <ServiceTwelve />
      ],
      services_array: [
        'Tooth Whitening',
        'Braces',
        'Tooth Implants',
        'Teeth Insurance',
        'Dental Hygiene',
        'Dental Veneers',
        'Swollen Gums',
        'Sensitivity Issues',
        'Invisalign',
        'Root Canal',
        'Tooth Extraction',
        'Cavity Repairs',
      ]
    };
  }
  render() {
    return (
      <div className="featured-services-container" id={this.props.id}>
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
                      <Col
                        xl={2}
                        lg={2}
                        md={4}
                        sm={6}
                        xs={6}
                        className="services-circle-column"
                      >
                        <Link to="/services">
                          <div className="services-circles">
                            {/* <Image
                              className="services-circle-image"
                              src={this.state.images[index + 1]}
                              alt="braces"
                            /> */}
                            {this.state.images_array_1[index]}
                          </div>
                          <h6 className="circle-image-description">
                            {this.state.services_array[index].toUpperCase()}
                          </h6>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
                <br />
                <br />
                <Row className="featured-services-items-images">
                  {this.state.items.map((item, index) => {
                    return (
                      <Col
                        xl={2}
                        lg={2}
                        md={4}
                        sm={6}
                        xs={6}
                        className="services-circle-column"
                      >
                        <Link to="/services">
                          <div className="services-circles">
                            {/* <Image
                              className="services-circle-image"
                              src="/assets/images/cleanTooth.png"
                              alt="braces"
                            /> */}
                            {this.state.images_array_2[index]}
                          </div>
                          <h6 className="circle-image-description">
                            {this.state.services_array[index + 6].toUpperCase()}
                          </h6>
                        </Link>
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
