import React, { Component } from "react";
import { Row, Col, Image, Container, Dropdown } from "react-bootstrap";
import "./ListedDoctors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faGraduationCap,
  faStar
} from "@fortawesome/free-solid-svg-icons";
// import BookNowPopUp from "./BookNowPopUp/BookNowPopUp";
import CollapsableBooking from "./CollapsableBooking/CollapsableBooking";

export default class ListedDoctors extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      designation: "Senior Consultant and Head of Department",
      degree: "BDS, Degree2, Degree3",
      field: "Dentist, Dental Surgeon, Implantologist",
      items: [0, 1, 2],
      showModal: false
    };
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    //storing the list of doctors inside a single array.
    let doctorsList = this.state.items.map((item, index) => {
      return (
        <Col xl={12} className="doctor-cards-container">
          <Row className="doctors-card-base-row">
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
                    &nbsp;{this.state.field}
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
                  &nbsp;96%&nbsp;votes
                </span>
                {/*rendering the book-now-pop-up for the selected doctor.*/}
                {/* <ButtonToolbar>
                  <Button
                    className="book-now-button"
                    size="sm"
                    onClick={() => this.setState({ showModal: true })}
                  >
                    BOOK NOW
                  </Button>
                  <BookNowPopUp
                    show={this.state.showModal}
                    onHide={this.closeModal}
                  />
                </ButtonToolbar> */}
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <CollapsableBooking />
            </Col>
          </Row>
        </Col>
      );
    });
    return (
      <Container fluid className="doctors-list-container">
        <div className="sort-function">
          <div className="best-doctors-line">
            We have found the best doctors for you in your area.
          </div>
          <Dropdown className="sort-functionality" drop="left">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="listed-doctors">
          <Row className="doctors-list-base-row">{doctorsList}</Row>
          <br />
        </div>
      </Container>
    );
  }
}
