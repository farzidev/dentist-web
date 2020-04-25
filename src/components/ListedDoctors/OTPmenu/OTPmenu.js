import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";
import { BookingDetails } from "./SendOTPMenu";
// import PhoneAuth from "../PhoneAuth/PhoneAuth";

export default function OTPmenu() {
  return (
    <div>
      <BookingDetails />
      <Row className="otp-containing-module">
        <Col md={3} className="confirm-booking-inner-column">
          <div>
            Enter Recieved OTP
          </div>
        </Col>
        <Col md={6} className="otp-menu-container">
          <div className="otp-view">
            <div className="otp-inputs">
              <OtpInput
                inputStyle={{
                  width: "2rem",
                  height: "2rem",
                  margin: "0 3px",
                  fontSize: "2rem",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black"
                }}
                numInputs="4"
                shouldAutoFocus={false}
              />
            </div>
          </div>
        </Col>
        <Col md={3} className="confirm-booking-inner-column">
          <Button className="verify-otp-btn">Confirm&nbsp;OTP</Button>
        </Col>
      </Row>
    </div>
  );
}
