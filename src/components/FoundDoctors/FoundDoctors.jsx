import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ListedDoctors from "../ListedDoctors/ListedDoctors";
import { Row, Col, Image } from "react-bootstrap";
import "./FoundDoctors.css";

export default class FoundDoctors extends Component {
  render() {
    return (
      <div className="found-doctors">
        <NavBar />
        <div className="blue-line"></div>
        <Row className="base-row">
          <Col md={8} className="listed-doctors-left-col">
            <ListedDoctors />
          </Col>
          <Col md={4} className="listed-doctors-right-col">
            <div className="right-content-container">
              <Image
                className="free-medical-camp-image"
                src="/assets/images/maskGroup3x.png"
                fluid
              />
              <span>
                <h4>What is Root Canal?</h4>
                <br />A root canal is a treatment used to repair and save a
                tooth that is badly decayed or becomes infected. During a root
                canal procedure, the nerve and pulp are removed and the inside
                of the tooth is cleaned and sealed. Without treatment, the
                tissue surrounding the tooth will become infected and Read More…
              </span>
              <br />
              <br />
              <span>
                <h4>Common Issues</h4>
                <br />
                Swelling that may spread to other areas Bleeding Gums Boneless
                around tip of root
              </span>
            </div>
            <br />
            <div className="consult-a-doctor">
              <Row>
                <Col md={3}>
                  <Image
                    className="consult-doctor-image"
                    src="/assets/images/consultDoctor.png"
                    fluid
                  />
                </Col>
                <Col md={9}>
                  <h3>Consult a doctor online</h3>
                  <span>
                    Verified Doctors
                    <br />
                    Quick Replies
                    <br />
                    10K+ patients helped
                    <br />
                  </span>
                  <br />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
