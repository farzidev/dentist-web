import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Header from "../Header/Header";
// import Testimonial from "../Testimonial/Testimonial";
import TestimonialTest from "../Testimonial/TestTestimonial";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import FeaturesBenefits from "../FeaturesBenefits/FeaturesBenefits";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";


export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar />
        <hr />
        <Header id="home" />
        <br />
        {/* <Testimonial /> */}
        <TestimonialTest id="testimonials" />
        <FeaturedServices id="services" />
        <FeaturesBenefits />
        <AboutUs id="about" />
        <Footer />
      </div>
    );
  }
}
