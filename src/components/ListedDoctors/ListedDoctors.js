import React, { Component } from "react";
import { Row, Col, Image, Container, Dropdown, Spinner } from "react-bootstrap";
import "./ListedDoctors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faThumbsUp,
  faGraduationCap,
  faStar,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
// import BookNowPopUp from "./BookNowPopUp/BookNowPopUp";
import CollapsableBooking from "./CollapsableBooking/CollapsableBooking";

export default class ListedDoctors extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  closeModal = () => this.setState({ showModal: false });

  async componentDidMount() {
    const url = "http://3.19.62.186:6999/api/show-doctor-available-slots";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.data });
  }

  render() {
    //storing the list of doctors inside a single array.
    let doctorsList = this.state.data.map((indiData, index) => {
      if (!indiData) {
        return <Spinner animation="border" role="status" />
      } else {
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
                    {"Dr. " +
                      indiData.doctor_info.first_name +
                      " " +
                      indiData.doctor_info.last_name}
                  </h5>
                  <div className="doctors-name-designation">
                    <i>{indiData.doctor_info.designation}</i>
                  </div>
                  <br />
                  <br />
                  <div className="doctors-degree-field">
                    <span>
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        color="light-blue"
                      />
                      &nbsp;&nbsp;{indiData.doctor_info.degree}
                    </span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faStar} color="light-blue" />
                      &nbsp;&nbsp;{indiData.doctor_info.field}
                    </span>
                    <br />
                    <span>
                      <FontAwesomeIcon icon={faLanguage} color="light-blue" />
                      &nbsp;&nbsp;{indiData.doctor_info.language}
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
                {/* <div className="book-now-votes-division">
                  <span className="thumbsup-votes">
                    <FontAwesomeIcon icon={faThumbsUp} color="green" />
                    &nbsp;{indiData.doctor_info.votes}
                  </span> */}
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
                {/* </div> */}
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="collapsable-booking-menu-container"
              >
                <CollapsableBooking DoctorData={indiData} />
              </Col>
            </Row>
          </Col>
        );
      }
    });
    return (
      <Container fluid className="doctors-list-container">
        {/* <div className="sort-function">
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
        </div> */}
        <div className="listed-doctors">
          <Row noGutters className="doctors-list-base-row">{doctorsList}</Row>
          <br />
        </div>
      </Container>
    );
  }
}
