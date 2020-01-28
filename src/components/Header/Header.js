import React, { Component } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Row className="header-base-row">
          <Col lg={12} className="header-left-col">
            <Row>
              <Col xl={7} lg={7} md={7} sm={12} xs={12}>
                <div className="header-text">
                  <div className="header-text-content">
                    <h4>Together We Move Towards</h4>
                    <br />
                    <span>A Happy Dental Family.</span>
                  </div>
                  <Button variant="light">Book Now</Button>
                </div>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className="header-right-col-image"
              >
                <Image
                  src="/assets/images/headerTooth.png"
                  height="140px"
                  width="220px"
                  alt="headerTooth"
                />
              </Col>
            </Row>
          </Col>
          {/* <Col
            xl={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            sm={12}
            xs={12}
            className="header-right-col"
          >
            <BookAppointment />
          </Col> */}
        </Row>
      </Container>
    );
  }
}
