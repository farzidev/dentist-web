import React, { Component } from "react";
import "./AboutUs.css";
import { Col, Row, Image } from "react-bootstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="about-us-inner-container">
          <Row noGutters className="about-us-container-base-row">
            <Col lg={9} md={9} className="about-us-left-col">
              <div className="about-us-left-col-division">
                <Row noGutters className="left-col-upper-row">
                  <Col md={12} lg={12}>
                    <h6>About Us</h6>
                    <h2>Dentist Finder</h2>
                    <br />
                    <span className="about-us-span-left-col">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam
                      remfffgffff fgaperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto Sbdkfbsdljfbslfbsdb
                      dsbfksubkuf hsudbfksbh Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium totam remfffgffff fgaperiam, eaque ipsa quae ab
                      illo inventore veritatis et quasi architecto
                      Sbdkfbsdljfbslfbsdb dsbfksubkuf hsudbfksbh.
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
                      className="d-none d-lg-block"
                      src="/assets/images/toothCare3x.png"
                      alt="tooth care"
                      fluid
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={3}
              md={3}
              className="d-none d-lg-block"
              // className="three-image-right-col"
            >
              <Image
                className="three-tooth-image"
                src="/assets/images/toothAbout2x.png"
                alt="tooth care"
                fluid
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}