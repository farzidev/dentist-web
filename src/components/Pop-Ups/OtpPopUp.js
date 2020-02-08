import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PhoneAuth from "../ListedDoctors/PhoneAuth/PhoneAuth";

export default class OTPModal extends Component {
  constructor() {
    super();
    this.state = {
      showOTPModal: false
    };
  }

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Verify OTP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PhoneAuth />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
