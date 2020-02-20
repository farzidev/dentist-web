import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

export default class appointmentTime extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col md={1}></Col> */}
          <Col md={12}>
            <Row>
              <Col md={12} sm={4} xs={4}>
                <Row>
                  <Col md={2}>
                    <span>Morning</span>
                  </Col>
                  {this.state.morningTime.map(item => {
                    return (
                      <Col md={2}>
                        <Button
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
          {/* <Col md={1}></Col> */}
        </Row>
        <br />
        <Row>
          {/* <Col md={1}></Col> */}
          <Col md={12}>
            <Row>
              <Col md={12} sm={4} xs={4}>
                <Row>
                  <Col md={2}>
                    <span>Afternoon</span>
                  </Col>
                  {this.state.afternoonTime.map(item => {
                    return (
                      <Col md={2}>
                        <Button
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
          {/* <Col md={1}></Col> */}
        </Row>
        <br />
        <Row>
          {/* <Col md={1}></Col> */}
          <Col md={12}>
            <Row>
              <Col md={12} sm={4} xs={4}>
                <Row>
                  <Col md={2}>
                    <span>Evening</span>
                  </Col>
                  {this.state.eveningTime.map(item => {
                    return (
                      <Col md={2}>
                        <Button
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
          {/* <Col md={1}></Col> */}
        </Row>
      </Container>
    );
  }
}