import React, { Component } from "react";
import { Form, FormLabel, Button } from "react-bootstrap";
import "./BookAppointment.css";

export default class BookAppointment extends Component {
  render() {
    return (
      <div className="book-appoint-container">
        <Form className="book-appoint-form">
          <FormLabel>
            <h4 className="appointment-title">Book Appointment</h4>
          </FormLabel>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Contact Number" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>Noida</option>
              <option>New Delhi</option>
              <option>Gurgaon</option>
              <option>Faridabad</option>
              <option>Greater-Noida</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="other-info-label">
              Other Information
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button className="book-btn" variant="light">
            Book Appointment
          </Button>
        </Form>
      </div>
    );
  }
}
