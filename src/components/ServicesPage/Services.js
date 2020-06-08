import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import LinksFooter from "../LinksFooter/LinksFooter";
import "./Services.css";
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services-background">
          <h5>SERVICES</h5>
        </div>
        <div className="services-container">
          <Navbar />
          <Row noGutters>
            <Col md={7}>
              <div className="services-parent-content-container">
                <h5 className="services-headline">
                  Dental Hygiene
                </h5>
                <br />
                <div className="services-content-div">
                  Dental hygiene is the practice of keeping teeth clean and
                  healthy. Our mouths are subjected to over 600 different kinds
                  of bacteria all the time, and while some of the bacteria are
                  good, the job of bad bacteria is to cause cavities, gum
                  disease, and bad breath. At Southern Ontario DentistWeb
                  dental clinics, our dentists and hygienists partner with
                  patients of all ages to battle bad bacteria. We want you to
                  keep your natural teeth and enjoy healthy gums throughout your
                  lifetime.<br /><br /> We encourage all our patients to attend a dental
                  hygiene and cleaning visit every six months. A regular dental
                  checkup entails evaluating teeth, existing dental work, soft
                  oral tissues, and gum health. Your DentistWeb dentist will
                  also explain how to make the most of your home brushing and
                  flossing practice, by using proper techniques and the right
                  products for your oral health needs.<br /><br /> We may take x-rays to see
                  the structures of your mouth that exist below your gums – like
                  teeth roots, sockets, and your jaw bone. Once the dentist has
                  information from his examination and your records, he will
                  review them and present his findings. If necessary, he will
                  discuss his findings and a treatment plan with you. Rest
                  assured, we work with patients to provide affordable dental
                  services, so you can get the dental care you need!
                </div>
                <br />
                <h5 className="services-headline">
                  Your Dental Hygiene Visit
                </h5>
                <br />
                <div className="services-content-div">
                  Dental hygiene is the practice of keeping teeth clean and
                  healthy. Our mouths are subjected to over 600 different kinds
                  of bacteria all the time, and while some of the bacteria are
                  good, the job of bad bacteria is to cause cavities, gum
                  disease, and bad breath. At Southern Ontario DentistWeb
                  dental clinics, our dentists and hygienists partner with
                  patients of all ages to battle bad bacteria. We want you to
                  keep your natural teeth and enjoy healthy gums throughout your
                  lifetime.<br /><br /> We encourage all our patients to attend a dental
                  hygiene and cleaning visit every six months. A regular dental
                  checkup entails evaluating teeth, existing dental work, soft
                  oral tissues, and gum health. Your DentistWeb dentist will
                  also explain how to make the most of your home brushing and
                  flossing practice, by using proper techniques and the right
                  products for your oral health needs.
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="services-image-container">
                <Image
                  src="assets/images/sidebar-illus.png"
                  height="350px"
                  width="300px"
                />
              </div>
              <div>
                <h4 style={{ color: "#ff4444", textAlign: "center", marginTop: "2rem" }}>We Always Care For You.</h4>
                <h5 style={{ color: "black", textAlign: "center" }}>Any Queries?</h5>
                <br />
                <div style={{ color: "#5d5d5d", textAlign: "center", padding: "0 6rem" }}>Your DentistWeb dentist will
                also explain how to make the most of your home brushing and
                flossing practice.
                </div>
                <div className="appointment-btn-services-page">
                  <Link to="/founddoctors">
                    <Button className="services-page-book-now-btn">Book Appointment Now</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <LinksFooter />
      </div >
    );
  }
}
