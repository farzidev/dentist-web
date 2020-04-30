import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";
import { BookingDetails } from "./SendOTPMenu";
// import PhoneAuth from "../PhoneAuth/PhoneAuth";

export default class OTPmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }

  handleOtpChange = (otp) => {
    this.setState({ otp });
  };

  // componentDidUpdate() {
  //   console.log(this.state.otp);
  // }

  render() {
    return (
      <div>
        <BookingDetails
          time={this.props.selectedTime}
          date={this.props.selectedDate}
        />
        <Row className="otp-containing-module">
          <Col md={3} className="confirm-booking-inner-column">
            <div>Enter Received OTP</div>
          </Col>
          <Col md={6} className="otp-menu-container">
            <div className="otp-view">
              <div id="recaptcha-container"></div>
              <div className="otp-inputs">
                <OtpInput
                  inputStyle={{
                    width: "1.5rem",
                    height: "2rem",
                    margin: "0 3px",
                    fontSize: "2rem",
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                  onChange={this.handleOtpChange}
                  numInputs={6}
                  shouldAutoFocus={true}
                  value={this.state.otp}
                />
              </div>
            </div>
          </Col>
          <Col md={3} className="confirm-booking-inner-column">
            <Button
              className="verify-otp-btn"
              onClick={(otp) => {
                // this.props.OtpHandler(this.state.otp);
                this.props.verifyUser(this.state.otp);
              }}
            >
              Confirm&nbsp;OTP
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
