import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";
import "./TestTestimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      arrows: false,
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        // {
        //   breakpoint: 1268,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     infinite: true,
        //     dots: false
        //   }
        // },
        {
          breakpoint: 1268,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="parent-testimonials-div" id={this.props.id}>
        <div className="slider-component">
          <Slider {...settings}>
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
                  <div>We thrive to create the best experience for everyone who comes
                  to us.We thrive to create the best experience for everyone who
                  comes to us.We thrive to create the best experience for everyone who
                  comes to us.</div>
                  <br />
                  <span className="testimonial-author">Aman Rawat</span>
                  <br />
                  <span className="company-name">Farzi Engineer</span>
                  <br />
                  <br />
                  <span style={{ color: "#ff7474" }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                  </span>
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
                  <div>We thrive to create the best experience for everyone who comes
                  to us.We thrive to create the best experience for everyone who
                  comes to us.We thrive to create the best experience for everyone who
                  comes to us.</div>
                  <br />
                  <span className="testimonial-author">Aman Rawat</span>
                  <br />
                  <span className="company-name">Farzi Engineer</span>
                  <br />
                  <br />
                  <span style={{ color: "#ff7474" }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                  </span>
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
                  <div>We thrive to create the best experience for everyone who comes
                  to us.We thrive to create the best experience for everyone who
                  comes to us.We thrive to create the best experience for everyone who
                  comes to us.</div>
                  <br />
                  <span className="testimonial-author">Aman Rawat</span>
                  <br />
                  <span className="company-name">Farzi Engineer</span>
                  <br />
                  <br />
                  <span style={{ color: "#ff7474" }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                  </span>
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
                  <div>We thrive to create the best experience for everyone who comes
                  to us.We thrive to create the best experience for everyone who
                  comes to us.We thrive to create the best experience for everyone who
                  comes to us.</div>
                  <br />
                  <span className="testimonial-author">Aman Rawat</span>
                  <br />
                  <span className="company-name">Farzi Engineer</span>
                  <br />
                  <br />
                  <span style={{ color: "#ff7474" }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                  </span>
                </span>
              </div>
            </div>
          </Slider>
        </div>

        {/* partition */}

        <div className="testimonial-text-container">
          <div className="testimonial-text-inner-container">
            <h6 className="client-about-us-title">Client About Us</h6>
            <h2>Testimonial</h2>
            <br />
            <div className="testimonials-list-items">
              <div className="testimonials-single-item">
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
                </div>
              <br />
              <div className="testimonials-single-item">
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
                </div>
              <br />
              <div className="testimonials-single-item">
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
                </div>
              <br />
              <div className="testimonials-single-item">
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
                </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}