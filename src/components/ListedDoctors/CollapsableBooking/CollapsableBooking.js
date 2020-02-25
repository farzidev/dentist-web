import React, { Component } from "react";
import { Button, Collapse, Row, Col } from "react-bootstrap";
import ScrollableTabs from "./ScrollableTabs/ScrollableTabs";
import "./CollapsableBooking.css";
import OTPMenu from "../OTPmenu/OTPmenu";

export default class CollapsableBooking extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      showOtpMenu: false
    };
  }

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  toggleOTPMenu = () => {
    this.setState({ showOtpMenu: !this.state.showOtpMenu });
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
              {!this.state.showOtpMenu && (
                <Row>
                  <Col md={12}>
                    <ScrollableTabs />
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
                      {console.log(this.state.showOtpMenu)}
                    </div>
                  </Col>
                </Row>
              )}
              {this.state.showOtpMenu && (
                <Row>
                  <Col md={12}>
                    <OTPMenu />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Collapse>
      </React.Fragment>
    );
  }
  // const [open, setOpen] = useState(false);

  // const removeButton = () => {
  //   document.getElementById("book-now-card-btn-id").style.display = "none";
  // };
}
