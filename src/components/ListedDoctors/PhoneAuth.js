import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import "./PhoneAuth.css";
import { Button } from "react-bootstrap";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class PhoneAuth extends Component {
  constructor() {
    super();
    this.state = {
      phone: ""
    };
  }

  phoneAuth = () => {
    console.log("Phone authentication is getting called");
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible"
      }
    );
    var provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(this.state.phone, recaptchaVerifier)
      .then(function(verificationId) {
        var verificationCode = window.prompt(
          "Please enter the verification " +
            "code that was sent to your mobile device."
        );
        return firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
      })
      .then(function(phoneCredential) {
        console.log("User Authenticated");
        return firebase.auth().signInWithCredential(phoneCredential);
      });
  };

  handleChange = event => {
    this.setState({ phone: event.target.value });
  };

  render() {
    return (
      <div className="phone-authentication-page">
        <div className="phone-authentication-container">
          <h6>Verify your phone number</h6>
          <br />
          <form>
            <input
              type="text"
              id="number"
              placeholder="+9198******01"
              value={this.state.phone}
              onChange={this.handleChange}
              className="number-input-phone-auth"
            />
            <div id="recaptcha-container"></div>
            <button type="button" onClick={() => this.phoneAuth()}>
              SendCode
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
  firebaseAppAuth
})(PhoneAuth);
