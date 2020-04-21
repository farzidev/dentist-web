import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class newTimeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedTime: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} xs={4}>
            Morning
          </Col>
          <Col md={2} xs={4}>
            Morning
          </Col>
          <Col md={2} xs={4}>
            Morning
          </Col>
          <Col md={2} xs={4}>
            Morning
          </Col>
          <Col md={2} xs={4}>
            Morning
          </Col>
          <Col md={2} xs={4}>
            Morning
          </Col>
        </Row>

        <Row>
          <Col md={2} xs={4}>
            Noon
          </Col>
          <Col md={2} xs={4}>
            Noon
          </Col>
          <Col md={2} xs={4}>
            Noon
          </Col>
          <Col md={2} xs={4}>
            Noon
          </Col>
          <Col md={2} xs={4}>
            Noon
          </Col>
          <Col md={2} xs={4}>
            Noon
          </Col>
        </Row>
        <Row>
          <Col md={2} xs={4}>
            Evening
          </Col>
          <Col md={2} xs={4}>
            Evening
          </Col>
          <Col md={2} xs={4}>
            Evening
          </Col>
          <Col md={2} xs={4}>
            Evening
          </Col>
          <Col md={2} xs={4}>
            Evening
          </Col>
          <Col md={2} xs={4}>
            Evening
          </Col>
        </Row>
      </Container>
    );
  }
}
