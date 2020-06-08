import React, { Component } from "react";
import moment from "moment";
import { Button, Collapse, Row, Col } from "react-bootstrap";
import ScrollableTabs from "./ScrollableTabs/ScrollableTabs";
import "./CollapsableBooking.css";
// import OTPMenu from "../OTPmenu/OTPmenu";
import SendOTPMenu from "../OTPmenu/SendOTPMenu";

export default class CollapsableBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showSendOtpMenu: false,
      selectedTime: "",
      selectedDate: "",
    };
  }

  selectedTimeHandler = (time) => {
    // console.log(time);
    this.setState({ selectedTime: time });
  };

  selectedDateHandler = (value = 0) => {
    // console.log(value);
    if (value === 0) {
      this.setState({ selectedDate: moment().format("Do MMM YYYY") });
    }
    if (value !== 0) {
      switch (value) {
        case 1:
          this.setState({
            selectedDate: moment()
              .add(1, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        case 2:
          this.setState({
            selectedDate: moment()
              .add(2, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        case 3:
          this.setState({
            selectedDate: moment()
              .add(3, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        case 4:
          this.setState({
            selectedDate: moment()
              .add(4, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        case 5:
          this.setState({
            selectedDate: moment()
              .add(5, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        case 6:
          this.setState({
            selectedDate: moment()
              .add(6, "days")
              .format("Do MMM YYYY")
              .toString(),
          });
          break;
        default:
          break;
      }
    }
  };

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  toggleOTPMenu = () => {
    this.setState({ showSendOtpMenu: !this.state.showSendOtpMenu });
  };

  // componentDidUpdate() {
  //   console.log(this.props.DoctorData.doctor_info);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="book-now-card-btn-container" id="book-now-card-btn-id">
          <Button
            className={!this.state.open ? "test-button" : "test-button-hide"}
            size="md"
            onClick={this.setOpen}
            aria-expanded={this.state.open}
          >
            Book&nbsp;Now
          </Button>
        </div>
        <Collapse in={this.state.open}>
          <Row noGutters>
            <Col md={12}>
              {!this.state.showSendOtpMenu && (
                <Row>
                  <Col md={12}>
                    <ScrollableTabs
                      DoctorDataNested={this.props.DoctorData}
                      timeHandler={this.selectedTimeHandler}
                      dateHandler={this.selectedDateHandler}
                    />
                  </Col>
                  <Col md={12} className="confirm-appointment-col">
                    <div className="confirm-appointment-btn-div">
                      <Button
                        size="md"
                        onClick={this.toggleOTPMenu}
                        className="confirm-appointment-btn"
                      >
                        Confirm&nbsp;Appointment
                      </Button>
                    </div>
                  </Col>
                </Row>
              )}
              {this.state.showSendOtpMenu && (
                <Row>
                  <Col md={12}>
                    <SendOTPMenu
                      selectedTime={this.state.selectedTime}
                      selectedDate={this.state.selectedDate}
                      DoctorInfo={this.props.DoctorData.doctor_info}
                    />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Collapse>
      </React.Fragment>
    );
  }
}
