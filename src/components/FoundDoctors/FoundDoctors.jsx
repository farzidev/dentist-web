import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import LinksFooter from "../LinksFooter/LinksFooter";
import ListedDoctors from "../ListedDoctors/ListedDoctors";
import { Row, Col, Image } from "react-bootstrap";
import "./FoundDoctors.css";

export default class FoundDoctors extends Component {
  render() {
    return (
      <div className="found-doctors">
        <NavBar />
        <div className="blue-line">
          <h5>We have found the best doctors for you.</h5>
        </div>

        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className="base-row">
              <Col lg={9} className="listed-doctors-left-col">
                <ListedDoctors />
              </Col>
              <Col lg={3} className="listed-doctors-right-col">
                <div className="right-content-container">
                  <Image
                    className="free-medical-camp-image"
                    src="/assets/images/maskGroup3x.png"
                    fluid
                  />
                  <div className="root-canal-content">
                    <h4 className="side-heading">What is Root Canal?</h4>
                    <br />
                    <span>
                      A root canal is a treatment used to repair and save a
                      tooth that is badly decayed or becomes infected. During a
                      root canal procedure, the nerve and pulp are removed and
                      the inside of the tooth is cleaned and sealed. Without
                      treatment, the tissue surrounding the tooth will become
                      infected and{" "}
                      <a
                        className="read-more"
                        href="https://en.wikipedia.org/wiki/Root_canal"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Read More…
                      </a>
                    </span>
                  </div>
                  <br />
                  <br />
                  <div className="common-issues-content">
                    <h4 className="side-heading">Common Issues</h4>
                    <br />
                    Swelling that may spread to other areas Bleeding Gums
                    Boneless around tip of root
                  </div>
                </div>
                <br />
                <div className="consult-a-doctor">
                  <Row>
                    <Col
                      xl={4}
                      lg={12}
                      md={12}
                      className="consult-doctor-image-container"
                    >
                      <Image
                        className="consult-doctor-image"
                        src="/assets/images/consultDoctor.png"
                      />
                    </Col>
                    <Col
                      xl={8}
                      lg={12}
                      md={12}
                      className="consult-doctor-text-content"
                    >
                      <h3>Consult a doctor online</h3>
                      <div className="side-verified-doctors">
                        Verified Doctors
                        <br />
                        Quick Replies
                        <br />
                        10K+ patients helped
                        <br />
                      </div>
                      <br />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
        <LinksFooter />
      </div>
    );
  }
}
