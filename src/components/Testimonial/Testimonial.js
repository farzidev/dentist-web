import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Image } from "react-bootstrap";
import "./Testimonial.css";

// const options = {
//   items: 2,
//   nav: true,
//   loop: true,
//   autoPlay: true,
//   autoplayTimeout: 2000
// };

export default class Test extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
        loop: true
      },
      481: {
        items: 2,
        loop: true
      },
      768: {
        items: 3,
        loop: true
      },
      1000: {
        items: 2,
        loop: true
      }
    }
  };

  render() {
    return (
      <div className="testimonials-container">
        <div className="testimonials-card-carousel">
          <OwlCarousel
            className="owl-theme"
            items={2}
            loop
            margin={20}
            autoPlay
            responsive={this.state.responsive}
            // options={options}
          >
            <div class="item">
              <div className="testimonial-card testimonial-card-1">
                <div className="image-division">
                  <Image
                    className="face-image"
                    src="/assets/images/face.png"
                    height="70"
                    width="70"
                  />
                </div>
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
            <div class="item">
              <div className="testimonial-card testimonial-card-2">
                <div className="image-division">
                  <Image
                    className="face-image"
                    src="/assets/images/face.png"
                    height="70"
                    width="70"
                  />
                </div>
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
            <div class="item">
              <div className="testimonial-card testimonial-card-3">
                <div className="image-division">
                  <Image
                    className="face-image"
                    src="/assets/images/face.png"
                    height="70"
                    width="70"
                  />
                </div>
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
            <div class="item">
              <div className="testimonial-card">
                <div className="image-division">
                  <Image
                    className="face-image"
                    src="/assets/images/face.png"
                    height="70"
                    width="70"
                  />
                </div>
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
            <div class="item">
              <div className="testimonial-card">
                <div className="image-division">
                  <Image
                    className="face-image"
                    src="/assets/images/face.png"
                    height="70"
                    width="70"
                  />
                </div>
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
          </OwlCarousel>
        </div>

        {/* partition */}

        <div className="testimonials-text-container">
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
      </div>
    );
  }
}
