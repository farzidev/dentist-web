import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Row noGutters className="header-base-row">
        <Col xl={7} lg={7} md={7} sm={12} xs={12} className="header-left-col">
          <div className="header-text-content">
            <h4>Together We Move Towards</h4>
            <span>A Happy Dental Family.</span>
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
          <div className="side-image-container">
            <Image
              src="/assets/images/headerTooth.png"
              height="140px"
              width="220px"
              alt="headerTooth"
            />
          </div>
        </Col>
      </Row>
    );
  }
}

/* <Col
            xl={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            sm={12}
            xs={12}
            className="header-right-col"
          >
            <BookAppointment />
          </Col> */
