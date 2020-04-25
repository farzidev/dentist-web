import React, { Component } from "react";
import { Button, Collapse, Row, Col } from "react-bootstrap";
import ScrollableTabs from "./ScrollableTabs/ScrollableTabs";
import "./CollapsableBooking.css";
// import OTPMenu from "../OTPmenu/OTPmenu";
import SendOTPMenu from "../OTPmenu/SendOTPMenu";

export default class CollapsableBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showSendOtpMenu: false
    };
  }

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  toggleOTPMenu = () => {
    this.setState({ showSendOtpMenu: !this.state.showSendOtpMenu });
  };

  render() {
    return (
      <React.Fragment>
        <div className="book-now-card-btn-container" id="book-now-card-btn-id">
          <Button
            className={!this.state.open ? "test-button" : "test-button-hide"}
            size="md"
            onClick={this.setOpen}
            aria-expanded={this.state.open}
          >
            Book&nbsp;Now
          </Button>
        </div>
        <Collapse in={this.state.open}>
          <Row noGutters>
            <Col md={12}>
              {!this.state.showSendOtpMenu && (
                <Row>
                  <Col md={12}>
                    <ScrollableTabs DoctorDataNested={this.props.DoctorData} />
                  </Col>
                  <Col md={12} className="confirm-appointment-col">
                    <div className="confirm-appointment-btn-div">
                      <Button
                        size="md"
                        onClick={this.toggleOTPMenu}
                        className="confirm-appointment-btn"
                      >
                        Confirm&nbsp;Appointment
                      </Button>
                    </div>
                  </Col>
                </Row>
              )}
              {this.state.showSendOtpMenu && (
                <Row>
                  <Col md={12}>
                    <SendOTPMenu />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Collapse>
      </React.Fragment>
    );
  }
}
