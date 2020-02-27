import React, { Component } from "react";
import "./Blog.css";
import NavBar from "../Navbar/Navbar";
import Blogs from "./Blogs";
import Footer from "../Footer/Footer";

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Blogs />
        <Footer />
      </React.Fragment>
    );
  }
}
