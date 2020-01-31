import React, { Component } from "react";
import { Row, Col, Image, Button, Container, Dropdown } from "react-bootstrap";
import "./ListedDoctors.css";

export default class ListedDoctors extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      designation: "Senior Consultant and Head of Department",
      degree: "BDS, Degree2, Degree3",
      field: "Dentist, Dental Surgeon, Implantologist",
      items: [0, 1, 2, 3]
    };
  }

  render() {
    let doctorsList = this.state.items.map((item, index) => {
      return (
        <Col md={12} className="doctor-cards-container">
          <Row className="doctors-card-base-row">
            <Col md={3} className="doctors-image-division">
              <Image
                className="doctors-picture"
                src="/assets/images/doctorsImage.png"
                fluid
              />
            </Col>
            <Col md={6} className="doctors-info-container">
              <div className="doctors-info-division">
                <h5>{this.state.firstName + " " + this.state.lastName}</h5>
                <br />
                <span>{this.state.designation}</span>
                <br />
                <div className="doctors-degree-field">
                  <span>{this.state.degree}</span>
                  <br />
                  <span>{this.state.field}</span>
                </div>
                <br />
              </div>
            </Col>
            <Col md={3} className="votes-book-now-button">
              <div>
                <span>96% votes</span>
                <Button variant="success">BOOK NOW</Button>
              </div>
            </Col>
          </Row>
        </Col>
      );
    });
    return (
      <Container fluid className="doctors-list-container">
        <div className="sort-function">
          <span>We have found the best doctors for you in your area.</span>
          <Dropdown className="sort-functionality">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
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
