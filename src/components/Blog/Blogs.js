import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShareAlt } from "@fortawesome/free-solid-svg-icons";

export default class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      blogTitle: "Want Brighter, Whiter Teeth ?",
      datePosted: "27 Feb 2020",
      votes: "96",
      blogs: [0, 1, 2]
    };
  }
  render() {
    let blogList = this.state.blogs.map((blog, index) => {
      return (
        <Row noGutters className="blog-list-element-base-row">
          <Col md={12}>
            <Row noGutters>
              <Col md={5} className="blog-image">
                <h3>Would insert image here.</h3>
              </Col>
              <Col md={7} className="blog-content">
                <div className="blog-content-top-row">
                  <h4>{this.state.blogTitle}</h4>
                  <div className="blog-content-top-row-right">
                    <span className="thumbsup-votes">
                      <FontAwesomeIcon icon={faThumbsUp} color="green" />
                      &nbsp;{this.state.votes}%&nbsp;votes
                    </span>
                    &nbsp;&nbsp;
                    <span className="thumbsup-votes">
                      <FontAwesomeIcon icon={faShareAlt} color="green" />
                    </span>
                  </div>
                </div>
                <div className="blog-content-middle-row">
                  <h6 className="blog-content-author">
                    By&nbsp;Dr.&nbsp;{this.state.firstName}&nbsp;
                    {this.state.lastName}
                  </h6>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="blog-posted-on">
                    {this.state.datePosted}
                  </span>
                </div>
                <div className="blog-content-bottom-row">
                  <span>
                    Retrieve the tooth, hold it by the crown (the part that is
                    usually exposed in the mouth), and rinse off the tooth root
                    with water if it’s dirty. Do not scrub it or remove any
                    attached tissue fragments. If possible, try to put the tooth
                    back in place. Make sure it’s facing the right way. Never
                    force it into the socket. If it’s not possible to reinsert
                    the tooth in the socket, put the tooth in a small container
                    of milk (or cup of water that contains a pinch of table
                    salt, if milk is not available) or a product containing cell
                    growth medium, such as Save-a-Tooth. In all cases, see your
                    dentist as quickly as possible. Knocked out teeth with the
                    highest chances of being saved are those seen by the dentist
                    and returned to their socket within 1 hour of being knocked
                    out.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    });
    return (
      <Row noGutters className="blogs-menu-base-row">
        <Col md={1}></Col>
        <Col md={10} className="blogs-menu-container">
          {blogList}
        </Col>
        <Col md={1}></Col>
      </Row>
    );
  }
}
