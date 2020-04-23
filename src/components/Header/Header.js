import React, { Component } from "react";
import {
  Row,
  Col,
  Image,
  Carousel,
  CarouselItem,
  Button,
} from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <Row className="number-and-search">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button className="dentist-web-contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +123-4567890
            </Button>
          </Col>
          {/* <Col xl={4} lg={4} md={4} sm={4} xs={12}>
            <FormControl
              type="text"
              placeholder="Search for Doctors, Clinics, Hospitals etc..."
              className="mr-sm-2 search-bar"
            />
          </Col> */}
        </Row>

        <Carousel slide controls={false}>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={7}
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h3>Together We Move Towards</h3>
                    <span>A Happy Dental Family.</span>
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">BOOK NOW</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    src="/assets/images/headerTooth.png"
                    height="160px"
                    width="250px"
                    alt="headerTooth"
                  />
                </div>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={7}
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h3>Together We Move Towards</h3>
                    <span>A Happy Dental Family.</span>
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">BOOK NOW</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    src="/assets/images/headerTooth.png"
                    height="160px"
                    width="250px"
                    alt="headerTooth"
                  />
                </div>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={7}
                lg={7}
                md={7}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h3>Together We Move Towards</h3>
                    <span>A Happy Dental Family.</span>
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">BOOK NOW</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    src="/assets/images/headerTooth.png"
                    height="160px"
                    width="250px"
                    alt="headerTooth"
                  />
                </div>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}
