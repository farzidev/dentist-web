import React, { useState } from "react";
import moment from "moment";
import "./SendOTPMenu.css";
import { Row, Col, Button } from "react-bootstrap";
import OTPclass from "./OTPclass";

export default function SendOTPMenu(params) {
  const [ButtonText] = useState("Send OTP");
  const [OpenMenu, setOpenMenu] = useState(false);

  function PhoneNumberHandler(event) {
    let PhoneNumber = 0;
    if (event.target.value !== PhoneNumber) {
      PhoneNumber = event.target.value;
    }
    console.log(PhoneNumber);
  }

  if (!OpenMenu) {
    return (
      <div className="send-otp-menu-container">
        <BookingDetails time={params.selectedTime} date={params.selectedDate} />
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
                  <input
                    onChange={PhoneNumberHandler}
                    className="phone-number-input-field"
                    placeholder="10 digit phone number"
                  />
                </div>
                <div className="otp-number-info-line">
                  You'll get an OTP on the number
                </div>
              </Col>
              <Col md={3}>
                <Button
                  onClick={() => setOpenMenu(true)}
                  className="send-otp-btn"
                >
                  {ButtonText}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  } else if (OpenMenu) {
    return (
      <div className="confirm-otp-menu-container">
        <Row>
          <Col md={12}>
            <OTPclass
              selectedTime={params.selectedTime}
              selectedDate={params.selectedDate}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export function BookingDetails(params) {
  let date = params.date;
  if (date === "") {
    date = moment().format("Do MMM YYYY");
  }
  return (
    <Row className="booking-details">
      <Col md={4} className="booking-details-inner-col">
        <div>Date: {date}</div>
      </Col>
      <Col md={4} className="booking-details-inner-col">
        <div>Selected Time: {params.time}</div>
      </Col>
      <Col md={4} className="booking-details-inner-col">
        <Button size="sm" variant="light" className="change-appointment-btn">
          Choose A Different Time?
        </Button>
      </Col>
    </Row>
  );
}
