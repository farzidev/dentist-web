import React, { Component } from "react";
import {
  Row,
  Col,
  Image,
  Carousel,
  CarouselItem,
  Button,
  FormControl
} from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Row className="number-and-search">
          <Col md={8}>
            <Button className="dentist-web-contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +123-4567890
            </Button>
          </Col>
          <Col md={4}>
            <FormControl
              type="text"
              placeholder="Search for Doctors, Clinics, Hospitals etc..."
              className="mr-sm-2 search-bar"
            />
          </Col>
        </Row>

        <Carousel slide>
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
                <div className="header-text-content">
                  <h3>Together We Move Towards</h3>
                  <span>A Happy Dental Family.</span>
                  {/* <Button className="header-book-now-btn">BOOK NOW</Button> */}
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
                <div className="header-text-content">
                  <h4>Together We Move Towards</h4>
                  <span>A Happy Dental Family.</span>
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
                    height="140px"
                    width="220px"
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
                <div className="header-text-content">
                  <h4>Together We Move Towards</h4>
                  <span>A Happy Dental Family.</span>
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
                    height="140px"
                    width="220px"
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

/* <Col
            xl={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            sm={12}
            xs={12}
            className="header-right-col"
          >
            <BookAppointment />
          </Col> */
