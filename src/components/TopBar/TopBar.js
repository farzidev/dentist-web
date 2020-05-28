import React, { Component } from "react";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
// import { Row, Col } from "react-bootstrap";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar-container">
        <h5>DentistWeb, Canada</h5>
        <div className="topbar-svgs">
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span><FontAwesomeIcon icon={faInstagram} /></span>
          <span><FontAwesomeIcon icon={faTwitter} /></span>
          <span><FontAwesomeIcon icon={faGooglePlus} /></span>
        </div>
      </div>
    );
  }
}
