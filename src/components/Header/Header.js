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
                    <h6>AFFORDABLE</h6>
                    <span className="header-subtitle">DENTAL IMPLANTS</span>
                    <br />
                    <br />
                    <span>
                      Dental implants could improve your quality of life,
                      confidence, and appearance if you are missing teeth due to
                      extraction, injury, or disease. Implants are small
                      titanium posts placed into the jaw.
                    </span>
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
                    src="/assets/images/Banner1_Teeth.png"
                    // height="350px"
                    // width="550px"
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
                    <h6>SPECIALIST</h6>
                    <span className="header-subtitle">DENTAL HYGIENE</span>
                    <br />
                    <br />
                    <span>
                      Dental hygiene is the practice of keeping teeth clean and
                      healthy. Our mouths are subjected to over 600 different
                      kinds of bacteria all the time, and while some of the
                      bacteria are good.
                    </span>
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
                    src="/assets/images/Banner2_Doctor.png"
                    // height="500px"
                    // width="530px"
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
                    <h6>HAPPY</h6>
                    <span className="header-subtitle">
                      DENTAL FAMILY
                    </span>
                    <br />
                    <br />
                    <span>
                      Your children are welcome at the DentistWeb! All our
                      Southern Ontario dental clinics offer pediatric dentistry,
                      which caters to the unique oral health needs of infants,
                      young children, and adolescents.
                    </span>
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
                    src="/assets/images/Banner3_Group.png"
                    // height="400px"
                    // width="450px"
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
