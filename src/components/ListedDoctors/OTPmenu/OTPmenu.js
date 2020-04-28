import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";
import { BookingDetails } from "./SendOTPMenu";
// import PhoneAuth from "../PhoneAuth/PhoneAuth";

export default function OTPmenu(params) {

  const [OTPValue, setOTPValue] = useState('');

  const handleOtpChange = (otp) => {
    setOTPValue({ otp });
    console.log(OTPValue);
  }

  return (
    <div>
      <BookingDetails time={params.selectedTime} date={params.selectedDate} />
      <Row className="otp-containing-module">
        <Col md={3} className="confirm-booking-inner-column">
          <div>
            Enter Received OTP
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
                onChange={handleOtpChange}
                numInputs="4"
                shouldAutoFocus={true}
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
