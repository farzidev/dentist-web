import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import LinksFooter from "../LinksFooter/LinksFooter";
import "./AboutUs.css";
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="about-us-background">
          <h5>ABOUT&nbsp;US</h5>
        </div>
        <div className="about-us-container">
          <Navbar />
          <Row noGutters>
            <Col md={7}>
              <div className="about-us-parent-content-container">
                <h5 className="about-dentist-web-headline">
                  About Dentist Web Dental Offices
                </h5>
                <br />
                <div className="about-us-content-div">
                  At Dentist Web, we pride ourselves in premium yet affordable
                  dental care. We’re a warm family of dentists with various
                  locations throughout Southern Ontario in Canada.
                  <br />
                  <br /> As a brand, The Dentist Web was born in 2019, but we’ve
                  been operating our dental offices independent of our brand for
                  well over 15 years now. With just the right number of
                  locations, we’re able to continuously provide our patients
                  with immaculate care, without sacrificing quality or
                  convenience. As of August of 2018, we’re currently operating a
                  total of 19 locations with a new addition in Oakville, Ontario
                  later this year for a total of 20 locations.
                  <br />
                  <br /> Distinctively re-engineer revolutionary meta-services
                  and premium architectures. Intrinsically incubate intuitive
                  opportunities and real-time potentialities. Globally
                  revolutionize global sources through interoperable services.
                  Appropriately communicate one-to-one technology after
                  plug-and-play networks and worldwide potentialities
                  Distinctively re-engineer revolutionary meta-services and
                  premium architectures. Intrinsically incubate intuitive
                  opportunities and real-time potentialities. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                  Dramatically mesh low-risk high-yield alignments before
                  transparent e-tailers.
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="about-us-image-container">
                <Image
                  src="assets/images/about-us-illus.png"
                  height="280px"
                  width="240px"
                />
              </div>
              <div className="appointment-btn-services-page">
                <Link to="/founddoctors">
                  <Button className="services-page-book-now-btn">Book Appointment Now</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <LinksFooter />
      </div>
    );
  }
}

{
  /* 
<div className="about-us-inner-container">
            <Row noGutters className="about-us-container-base-row">
              <Col
                xl={10}
                lg={10}
                md={9}
                sm={12}
                xs={12}
                className="about-us-left-col"
              >
                <div className="about-us-left-col-division">
                  <Row noGutters className="left-col-upper-row">
                    <Col md={12} lg={12}>
                      <h6>About Us</h6>
                      <h2 className="about-us-title">Dentist Finder</h2>
                      <br />
                      <span className="about-us-span-left-col">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium totam
                        remfffgffff fgaperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto Sbdkfbsdljfbslfbsdb
                        dsbfksubkuf hsudbfksbh Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium totam remfffgffff fgaperiam, eaque ipsa quae ab
                        illo.
                    </span>
                      <br />
                      <br />
                    </Col>
                  </Row>
                  <Row noGutters>
                    <Col lg={9}>
                      <span className="about-us-span-2-left-col">
                        Eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto Sbdkfbsdljfbslfbsdb dsbfksubkuf hsudbfksbh Sed
                        ut perspiciatis unde omnis iste natus error sit voluptate
                        accusantium doloremque laudantium totam remfffgffff
                        fgaperiam, eaque ipsa quae ab lo inventore veritatis et
                        quasi architecto Sbdkfbsdljfbslfbsdb dsbfksubkuf
                        hsudbfksbh.
                    </span>
                    </Col>
                    <Col lg={3} md={3}>
                      <Image
                        className="d-none d-xl-block tooth-care-image"
                        src="/assets/images/toothCare3x.png"
                        alt="tooth care"
                        fluid
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={2} lg={2} md={3} sm={0} xs={0}>
            //  <Image
                className="d-none d-md-block three-tooth-image"
                src="/assets/images/3tooth.png"
                alt="tooth care"
                fluid
              // />
              <div className="three-tooth"></div>
              <div className="three-tooth-horizontal"></div>
            </Col>
          </Row>
        </div>
*/
}
