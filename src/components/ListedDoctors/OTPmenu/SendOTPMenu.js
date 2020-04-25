import React, { useState } from "react";
import "./SendOTPMenu.css";
import { Row, Col, Button } from "react-bootstrap";
import OTPMenu from "./OTPmenu";

export default function SendOTPMenu(date, time) {
  const [ButtonText] = useState("Send OTP");
  const [OpenMenu, setOpenMenu] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState('');

  console.log(PhoneNumber);

  if (!OpenMenu) {
    return (
      <div className="send-otp-menu-container">
        <BookingDetails />
        <Row>
          <Col md={12}>
            <Row className="send-otp-bottom-row">
              <Col md={4}>
                <div className="enter-your-number-line">
                  Enter Your Mobile Number To Confirm Booking
                </div>
              </Col>
              <Col md={5} className="phone-number-input-column">
                <div>
                  <input className="phone-number-input-field" placeholder="10 digit phone number" />
                </div>
                <div className="otp-number-info-line">You'll get an OTP on the number</div>
              </Col>
              <Col md={3}>
                <Button onClick={() => setOpenMenu(true)} className="send-otp-btn" >{ButtonText}</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  else if (OpenMenu) {
    return (
      <div className="confirm-otp-menu-container">
        <Row>
          <Col md={12}>
            <OTPMenu />
          </Col>
        </Row>
      </div>
    );
  }
}


export function BookingDetails() {
  return (
    <Row className="booking-details">
      <Col md={4} className="booking-details-inner-col">
        <div>Date</div>
      </Col>
      <Col md={4} className="booking-details-inner-col">
        <div>Time</div>
      </Col>
      <Col md={4} className="booking-details-inner-col">
        <Button size="sm" variant="light" className="change-appointment-btn">
          Choose A Different Time?
        </Button>
      </Col>
    </Row>
  );
}