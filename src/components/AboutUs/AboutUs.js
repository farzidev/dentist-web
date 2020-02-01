import React, { Component } from "react";
import "./AboutUs.css";
import { Col, Row, Image } from "react-bootstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
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
              <Image
                className="d-none d-md-block three-tooth-image"
                src="/assets/images/3tooth.png"
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
