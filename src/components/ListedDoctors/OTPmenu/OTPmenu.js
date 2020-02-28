import React, { Component } from "react";
// import { Row, Col } from "react-bootstrap";
import OtpInput from "react-otp-input";
import "./OTPmenu.css";

export default class OTPMenu extends Component {
  render() {
    return (
      // <Row className="otp-input-base-row" noGutters>
      //   <Col md={1}></Col>
      //   <Col md={10} className="otp-input-container">
      //     <h4>Enter One Time Password</h4>
      //     <OtpInput
      //       // className="otp-input-module"
      //       inputStyle={{
      //         width: "3rem",
      //         height: "3rem",
      //         margin: "0 1rem",
      //         fontSize: "2rem",
      //         borderRadius: 4,
      //         border: "1px solid rgba(0,0,0,0.3)"
      //       }}
      //       onChange={otp => console.log(otp)}
      //       containerStyle={"width: 2rem"}
      //       numInputs={6}
      //       isInputNum={true}
      //       shouldAutoFocus={true}
      //     />
      //   </Col>
      //   <Col md={1}></Col>
      // </Row>

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

//jquery approach

/*  

// constructor(props) {
  //   super(props);
  //   this.myref = React.createRef();
  // }

  // componentDidMount() {
  //   this.myref.current.focus();
  // }

  //The jquery approach
  // digitValidate = ele => {
  //   console.log(ele.value);
  //   ele.value = ele.value.replace(/[^0-9]/g, "");
  // };

  // tabChange = val => {
  //   let ele = document.querySelectorAll("input");
  //   if (ele[val - 1].value !== "") {
  //     ele[val].focus();
  //   } else if (ele[val - 1].value === "") {
  //     ele[val - 2].focus();
  //   }
  // };


      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-4 text-center">
            <div class="row">
              <div class="col-sm-12 mt-5 bgWhite">
                <div class="title">Verify OTP</div>

                <form action="">
                  <input
                    // ref={this.myref}
                    type="text"
                    // oninput={this.digitValidate(this)}
                    // onkeyup={this.tabChange(1)}
                    maxlength={1}
                  />
                  <input
                    type="text"
                    // ref={this.tf2}
                    // oninput={this.digitValidate(this)}
                    // onkeyup={this.tabChange(2)}
                    maxlength={1}
                  />
                  <input
                    type="text"
                    // oninput={this.digitValidate(this)}
                    // onkeyup={this.tabChange(3)}
                    maxlength={1}
                  />
                  <input
                    type="text"
                    // oninput={this.digitValidate(this)}
                    // onkeyup={this.tabChange(4)}
                    maxlength={1}
                  />
                  <input
                    type="text"
                    // oninput={this.digitValidate(this)}
                    // onkeyup={this.tabChange(5)}
                    maxlength={1}
                  />
                  <input
                    type="text"
                    // oninput={this.digitValidate(this)}
                    maxlength={1}
                  />
                </form>
                <hr />
                <button class="btn btn-primary btn-block mt-4 mb-4 customBtn">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      */
