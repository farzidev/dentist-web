import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import "./PhoneAuth.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class PhoneAuth extends Component {
  phoneAuth = () => {
    console.log("Phone authentication is getting called");
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    var provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber("+918860649734", recaptchaVerifier)
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
        console.log("Credentials loaded");
        return firebase.auth().signInWithCredential(phoneCredential);
      });
  };

  render() {
    return (
      <div className="phone-authentication-page">
        <div className="phone-authentication-container">
          <h3>Verify your phone</h3>
          <form>
            <input type="text" id="number" placeholder="+923********" />
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
