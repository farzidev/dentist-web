import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <h1>Hello this is the blog</h1>
        </Col>
        <Col md={1}></Col>
      </Row>
    );
  }
}
