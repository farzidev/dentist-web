import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import "./SendOTPMenu.css";
import { Row, Col, Button } from "react-bootstrap";
import OTPclass from "./OTPclass";

const firebaseApp = firebase.initializeApp(firebaseConfig);

function SendOTPMenu(params) {
  let date = params.selectedDate;
  if (date === "") {
    date = moment().format("Do MMM YYYY");
  }
  // console.log(params);
  // console.log(date);
  const [ButtonText] = useState("Send OTP");
  const [OpenMenu, setOpenMenu] = useState(false);
  const [ContactNumber, setContactNumber] = useState(0);
  const [confirmResult, setconfirmResult] = useState(null);
  const [IsVerified, setIsVerified] = useState(false);

  function PhoneNumberHandler(event) {
    let PhoneNumber = 0;
    if (event.target.value !== PhoneNumber) {
      PhoneNumber = event.target.value;
    }
    setContactNumber(PhoneNumber);
  }

  const confirmAppointment = () => {
    let docId = params.DoctorInfo.id;
    let passedDate = date;
    passedDate = moment().format("YYYY-MM-DD");
    console.log(passedDate);
    axios
      .post("http://3.19.62.186:6999/api/create-appointment", {
        doctor: docId,
        patient: ContactNumber,
        date: passedDate,
        time: params.selectedTime,
        day: "Monday",
        session: "Morning",
      })
      .then(console.log("Appointment Created"))
      .catch(err => console.log(err))
  }

  const handleSendCode = (phoneNumber) => {
    console.log("Phone authentication is getting called");
    const CodePhoneNumber = `+91` + phoneNumber;
    // console.log(CodePhoneNumber);

    let recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        'callback': function (token) {
          console.log(token);
        },
        'expired-callback': function () {
          console.log("call");
        }
      }
    );

    firebase.auth()
      .signInWithPhoneNumber(CodePhoneNumber, recaptchaVerifier)
      .then(function (confirmationResult) {
        setconfirmResult(confirmationResult);
        // console.log(confirmationResult);
      })
      .catch(error => {
        console.log(error)
      })
  }


  const verifyUser = (otp) => {
    if (otp.length === 6) {
      confirmResult.confirm(otp)
        .then(function (result) {
          // var user = result.user;
          setIsVerified(!IsVerified);
          console.log("Verified");
          alert("Great! Your Appointment is Booked!");
          confirmAppointment();
          params.history.push('/');
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      alert('Please enter a 6 digit OTP code.');
    }
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
                <div id="recaptcha-container"></div>
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
                  disabled={ContactNumber.toString().length !== 10}
                  onClick={() => {
                    setOpenMenu(true);
                    // post("http://3.19.62.186:6999/api/create-patient", ContactNumber)
                    // phoneAuth(ContactNumber);
                    axios
                      .post("http://3.19.62.186:6999/api/create-patient", {
                        name: "Patient's Name",
                        mobile: ContactNumber,
                      })
                      .then(console.log("Number Posted"))
                      .catch(err => console.log(err))
                    handleSendCode(ContactNumber);
                  }}
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
              // OtpHandler={OtpHandler}
              verifyUser={verifyUser}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
export default withFirebaseAuth({
  firebaseAppAuth,
})(withRouter(SendOTPMenu));

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
