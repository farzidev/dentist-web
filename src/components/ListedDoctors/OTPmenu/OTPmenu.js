import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";
// import PhoneAuth from "../PhoneAuth/PhoneAuth";

export default class OTPMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserSelectedTime: this.props.selectedTime,
      otp: [],
      numInputs: 6
    };
  }

  handleOtpChange = otp => {
    this.setState({ otp });
  };

  componentDidMount() {}

  render() {
    return (
      <Row noGutters className="otp-containing-module">
        <Col md={6} className="phone-number-container">
          <Form>
            <h6>
              <i>Confirm Appointment</i>
            </h6>
            <Form.Group controlId="formGroupPhoneNumber">
              <Form.Control type="text" placeholder="Enter patient's name" />
            </Form.Group>
            <Form.Group controlId="formGroupPhoneNumber">
              <Form.Control
                type="number"
                placeholder="Enter your phone number here"
              />

              <Button variant="success" className="send-otp-btn">
                Send&nbsp;OTP
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6} className="otp-menu-container">
          <div className="view">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <h5 className="enter-verification-code-line">
                  Enter verification code
                </h5>
                <div className="margin-top--small">
                  <OtpInput
                    inputStyle={{
                      width: "2rem",
                      height: "2rem",
                      margin: "0 3px",
                      fontSize: "2rem",
                      borderRadius: 4,
                      border: "1px solid rgba(0,0,0,0.3)"
                    }}
                    numInputs={this.state.numInputs}
                    onChange={otp => this.handleOtpChange(otp)}
                    isInputNum={true}
                    shouldAutoFocus={false}
                  />
                </div>
              </form>
            </div>
          </div>
          <Button variant="success">Confirm&nbsp;OTP</Button>
        </Col>
      </Row>
    );
  }
}
