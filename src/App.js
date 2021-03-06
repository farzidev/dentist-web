import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FoundDoctors from "./components/FoundDoctors/FoundDoctors";
import Blogs from "./components/Blog/Blog.jsx";
import Blog from "./components/Blog/Blog";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/ServicesPage/Services";
// import PhoneAuth from "./components/ListedDoctors/PhoneAuth/PhoneAuth";

export default class App extends Component {
  render() {
    return (
      <Container fluid className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/founddoctors" component={FoundDoctors} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blog" component={Blog} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={Services} />
            {/* <Route path="/phoneauth" component={PhoneAuth} /> */}
          </Switch>
        </Router>
      </Container>
    );
  }
}
