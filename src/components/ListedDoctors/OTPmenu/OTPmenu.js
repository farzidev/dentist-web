import React, { Component } from "react";
// import { Row, Col } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";

export default class OTPMenu extends Component {
  render() {
    return (
      <div className="view">
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <h2>Enter verification code</h2>
            <div className="margin-top--small">
              <OtpInput
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)"
                }}
                numInputs={6}
                errorStyle="error"
                onChange={otp => console.log(otp)}
                separator={<span>-</span>}
                isInputNum={true}
                shouldAutoFocus={true}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
