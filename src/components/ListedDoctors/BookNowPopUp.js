import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class BookNowPopUp extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Verify User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Contact Number (+91 and 10 digits)</Form.Label>
                <Form.Control
                  type="numbers"
                  placeholder="Enter your number here."
                />
                <Form.Text className="text-muted">
                  We'll never share your contact number with anyone else.
                </Form.Text>
                <br />
                <Button variant="success" onClick="phoneAuth();">
                  Send Code
                </Button>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>OTP Code</Form.Label>
                <Form.Control type="password" placeholder="Code" />
              </Form.Group>

              <Button variant="primary" onClick="codeverify();">
                Verify Code
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
