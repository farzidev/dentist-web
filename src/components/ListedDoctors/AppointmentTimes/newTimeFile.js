import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./appointmentTime.css";

export default class newTimeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedTime: "",
      morningTime: [
        { timing: "08:30 AM", isBooked: false },
        { timing: "09:00 AM", isBooked: true },
        { timing: "09:30 AM", isBooked: true },
        { timing: "10:00 AM", isBooked: false },
        { timing: "10:30 AM", isBooked: true }
      ],
      afternoonTime: [
        { timing: "12:30 PM", isBooked: false },
        { timing: "01:00 PM", isBooked: true },
        { timing: "01:30 PM", isBooked: true },
        { timing: "02:00 PM", isBooked: false },
        { timing: "02:30 PM", isBooked: false }
      ],
      eveningTime: [
        { timing: "06:00 PM", isBooked: true },
        { timing: "06:30 PM", isBooked: false },
        { timing: "07:00 PM", isBooked: true },
        { timing: "07:30 PM", isBooked: false },
        { timing: "08:00 PM", isBooked: true }
      ],
    };
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <Container fluid>
        <Row className="morningTimeRow">
          <Col md={2} xs={12}>
            Morning
          </Col>
          {this.state.morningTime.map((item, index) => {
            return (
              <Col md={2} xs={12} className="morningTime">
                <Button
                  value={item.timing}
                  className="timings-btn"
                  size="sm"
                  disabled={item.isBooked}
                  variant="outline-dark"
                >
                  {item.timing}
                </Button>
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col md={2} xs={12}>
            Afternoon
          </Col>
          {this.state.afternoonTime.map((item, index) => {
            return (
              <Col md={2} xs={12}>
                <Button
                  value={item.timing}
                  className="timings-btn"
                  size="sm"
                  disabled={item.isBooked}
                  variant="outline-dark"
                >
                  {item.timing}
                </Button>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col md={2} xs={12}>
            Evening
          </Col>
          {this.state.eveningTime.map((item, index) => {
            return (
              <Col md={2} xs={12}>
                <Button
                  value={item.timing}
                  className="timings-btn"
                  size="sm"
                  disabled={item.isBooked}
                  variant="outline-dark"
                >
                  {item.timing}
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
