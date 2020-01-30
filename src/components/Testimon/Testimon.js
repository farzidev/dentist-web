import React, { Component } from "react";
import { Carousel, CarouselItem, Image } from "react-bootstrap";
import "./Testimon.css";

export default class Testimon extends Component {
  render() {
    return (
      <div className="testimonial-container">
        <div className="testimonials-cards-container">
          <div className="carousel-container">
            <div className="testimonial-card-1">
              <Image src="/assets/images/face.png" height="70" width="70" />
              <br />
              <br />
              <span className="testimonial-card-content">
                We thrive to create the best experience for everyone who comes
                to us.We thrive to create the best experience for everyone who
                comes to us.
                <br />
                <hr />
                Aman Rawat
                <br />
                <br />
                FarziEngineer
                <br />
                <br />
                Stars
              </span>
            </div>
            <div className="testimonial-card-2">
              <Image src="/assets/images/face.png" height="70" width="70" />
              <br />
              <br />
              <span className="testimonial-card-content">
                We thrive to create the best experience for everyone who comes
                to us.We thrive to create the best experience for everyone who
                comes to us.
                <br />
                <hr />
                Aman Rawat
                <br />
                <br />
                FarziEngineer
                <br />
                <br />
                Stars
              </span>
            </div>
          </div>
        </div>

        {/* partition */}

        <div className="testimonial-text-container">
          <div className="testimonial-text-inner-container">
            <h6>Client About Us</h6>
            <h2>Testimonial</h2>
            <br />
            <div className="testimonials-list-items">
              <span className="testimonials-single-item">
                <Image
                  className="check-mark-image"
                  src="/assets/images/checkMark.svg"
                  alt="check-mark"
                  height="20px"
                  width="20px"
                  fluid
                />
                &nbsp;&nbsp;&nbsp;We thrive to create the best experience for
                everyone who comes to us.
              </span>
              <br />
              <span className="testimonials-single-item">
                <Image
                  className="check-mark-image"
                  src="/assets/images/checkMark.svg"
                  alt="check-mark"
                  height="20px"
                  width="20px"
                  fluid
                />
                &nbsp;&nbsp;&nbsp;We thrive to create the best experience for
                everyone who comes to us.
              </span>
              <br />
              <span className="testimonials-single-item">
                <Image
                  className="check-mark-image"
                  src="/assets/images/checkMark.svg"
                  alt="check-mark"
                  height="20px"
                  width="20px"
                  fluid
                />
                &nbsp;&nbsp;&nbsp;We thrive to create the best experience for
                everyone who comes to us.
              </span>
              <br />
              <span className="testimonials-single-item">
                <Image
                  className="check-mark-image"
                  src="/assets/images/checkMark.svg"
                  alt="check-mark"
                  height="20px"
                  width="20px"
                  fluid
                />
                &nbsp;&nbsp;&nbsp;We thrive to create the best experience for
                everyone who comes to us.
              </span>
              <br />
              <span className="testimonials-single-item">
                <Image
                  className="check-mark-image"
                  src="/assets/images/checkMark.svg"
                  alt="check-mark"
                  height="20px"
                  width="20px"
                  fluid
                />
                &nbsp;&nbsp;&nbsp;We thrive to create the best experience for
                everyone who comes to us.
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
