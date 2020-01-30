import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
// import Testimonials from "./components/Testimonials/Testimonials";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import FeaturesBenefits from "./components/FeaturesBenefits/FeaturesBenefits";

// import Testimon from "./components/Testimon/Testimon";
import Testimonial from "./components/Testimonial/Testimonial";

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <NavBar />
        <hr />
        <Header />
        <br />
        <Testimonial />
        <FeaturedServices />
        <FeaturesBenefits />
        <AboutUs />
        <Footer />
      </Container>
    );
  }
}
