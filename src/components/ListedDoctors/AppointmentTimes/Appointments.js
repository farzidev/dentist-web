import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./appointmentTime.css";

export default class appointmentTime extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
      selectedTime: ""
      // isClicked: false
    };
    // this.selectedTimeHandler = this.selectedTimeHandler.bind(this);
  }

  // toggleOTPMenu = () => {
  //   this.setState({ isClicked: !this.state.isClicked });
  // };

  async componentDidMount() {
    const url = "http://18.221.196.111:6999/api/show-doctor-available-slots";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ data: data.data });
  }

  selectedTimeHandler = selectedTime => {
    this.setState({ selectedTime: selectedTime });
  };

  componentDidUpdate() {
    console.log(this.state.selectedTime);
  }

  render() {
    return (
      <Container className="custom-padding-appointment" fluid>
        <Row noGutters>
          <Col md={12} className="parent-column-appointment">
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row noGutters className="morning-timings-row">
                      <Col md={2} sm={12}>
                        <span>Morning</span>
                      </Col>
                      {this.state.morningTime.map(item => {
                        return (
                          <Col md={2} sm={12}>
                            <Button
                              value={item.timing}
                              onClick={() =>
                                this.selectedTimeHandler(item.timing)
                              }
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
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row noGutters className="afternoon-timings-row">
                      <Col md={2} sm={12}>
                        <span>Afternoon</span>
                      </Col>
                      {this.state.afternoonTime.map(item => {
                        return (
                          <Col md={2} sm={12}>
                            <Button
                              value={item.timing}
                              onClick={() =>
                                this.selectedTimeHandler(item.timing)
                              }
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
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row noGutters className="evening-timings-row">
                      <Col md={2} sm={12}>
                        <span>Evening</span>
                      </Col>
                      {this.state.eveningTime.map(item => {
                        return (
                          <Col md={2} sm={12}>
                            <Button
                              value={item.timing}
                              onClick={() =>
                                this.selectedTimeHandler(item.timing)
                              }
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
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
