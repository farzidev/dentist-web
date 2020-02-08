import React, { Component } from "react";
import { Modal, Button, Row, Col, Image, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faGraduationCap,
  faStar,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./BookNowPopUp.css";
import ScrollableTabsButtonAuto from "./ScrollableTabs";
import OTPModal from "../Pop-Ups/OtpPopUp";

export default class BookNowPopUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      designation: "Senior Consultant and Head of Department",
      degree: "BDS, Degree2, Degree3",
      languages: "English, Cantonese, Mandarin",
      field: "Dentist, Dental Surgeon, Implantologist",
      items: [0, 1, 2],
      showOTPModal: false
    };
  }

  closeOTPModal = () => this.setState({ showOTPModal: false });

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          closeButton
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Book Appointment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="popup-card-base-row">
              <Col
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="doctors-image-column"
              >
                <div className="doctors-image-division">
                  <Image
                    className="doctors-picture"
                    src="/assets/images/doctorsImage.png"
                    fluid
                  />
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="doctors-info-container"
              >
                <div className="doctors-info-division">
                  <h5 className="doctors-name-designation">
                    {"Dr. " + this.state.firstName + " " + this.state.lastName}
                  </h5>
                  <div className="doctors-name-designation">
                    <i>{this.state.designation}</i>
                  </div>
                  <br />
                  <div className="doctors-degree-field">
                    <span>
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        color="light-blue"
                      />
                      &nbsp; {this.state.degree}
                    </span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faStar} color="light-blue" />
                      &nbsp; {this.state.field}
                    </span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faLanguage} color="light-blue" />
                      &nbsp; {this.state.languages}
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className="votes-book-now"
              >
                <div className="book-now-votes-division">
                  <span className="thumbsup-votes">
                    <FontAwesomeIcon icon={faThumbsUp} color="green" />
                    &nbsp;96% votes
                  </span>
                  {/*rendering the book-now-pop-up for the selected doctor.*/}
                </div>
              </Col>
            </Row>

            <div className="test">
              <ScrollableTabsButtonAuto />
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Link to={`/phoneAuth`}> */}
            <ButtonToolbar>
              <Button
                variant="danger"
                onClick={() => this.setState({ showOTPModal: true })}
              >
                Confirm Booking
              </Button>
              <OTPModal
                show={this.state.showOTPModal}
                onHide={this.closeOTPModal}
              />
            </ButtonToolbar>
            {/* </Link> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
