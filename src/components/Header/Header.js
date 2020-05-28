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
        {/* <Row className="number-and-search">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button className="dentist-web-contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +123-4567890
            </Button>
          </Col>
          <Col xl={4} lg={4} md={4} sm={4} xs={12}>
            <FormControl
              type="text"
              placeholder="Search for Doctors, Clinics, Hospitals etc..."
              className="mr-sm-2 search-bar"
            />
          </Col>
        </Row> */}

        <Carousel slide controls={false}>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h6>MEET THE DOCTORS</h6>
                    <span className="header-subtitle">WE HELP YOU ACHIEVE THE PERFECT SMILE.</span>
                    <br />
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    className="first-banner-image"
                    src="/assets/images/doctor-header-1.png"
                    height="400px"
                    width="500px"
                    alt="headerTooth"
                  />
                </div>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h6>FEATURED PROCEDURES</h6>
                    <span className="header-subtitle">WE PROVIDE HIGH QUALITY DENTAL CARE.</span>
                    <br />
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    className="second-banner-image"
                    src="/assets/images/doctor-info-header.png"
                    height="400px"
                    width="530px"
                    alt="headerTooth"
                  />
                </div>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row noGutters className="header-base-row">
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-left-col"
              >
                <div className="header-contain">
                  <div className="header-text-content">
                    <h6>OUR OFFICE</h6>
                    <span className="header-subtitle">WE PROVIDE A GREAT ENVIRONMENT.</span>
                    <br />
                  </div>
                  <br />
                  <div>
                    <Link to="/founddoctors">
                      <Button className="header-book-now-btn">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <div className="side-image-container">
                  <Image
                    className="third-banner-image"
                    src="/assets/images/teeth-clean.png"
                    height="400px"
                    width="450px"
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
