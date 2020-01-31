import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FoundDoctors from "./components/FoundDoctors/FoundDoctors";
// import NavBar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
// import Testimonials from "./components/Testimonials/Testimonials";
// import FeaturedServices from "./components/FeaturedServices/FeaturedServices";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Footer from "./components/Footer/Footer";
// import FeaturesBenefits from "./components/FeaturesBenefits/FeaturesBenefits";
// import Testimon from "./components/Testimon/Testimon";
// import Testimonial from "./components/Testimonial/Testimonial";

export default class App extends Component {
  render() {
    return (
      <Container className="App" fluid>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/founddoctors" component={FoundDoctors} />
          </Switch>
        </Router>
      </Container>
    );
  }
}
