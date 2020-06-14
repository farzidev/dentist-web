import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      blogTitle: "Want Brighter, Whiter Teeth ?",
      datePosted: "Feb 27, 2020",
      votes: "96",
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Row noGutters>
          <Col md={1}></Col>
          <Col md={10} className="single-blog-post-base-column">
            <div>
              <div className="single-blog-header">
                <h3>
                  <b>{this.state.blogTitle}</b>
                </h3>
                {/* <div className="single-blog-header-right">
                  <span className="thumbsup-votes">
                    <FontAwesomeIcon icon={faThumbsUp} color="green" />
                    &nbsp;{this.state.votes}%&nbsp;votes
                  </span>
                  &nbsp;&nbsp;
                  <span className="thumbsup-votes">
                    <FontAwesomeIcon icon={faShareAlt} color="green" />
                  </span>
                </div> */}
              </div>
              <div className="single-blog-header-line-2">
                <p className="single-blog-content-author">
                  By&nbsp;Dr.&nbsp;{this.state.firstName}&nbsp;
                  {this.state.lastName}
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="single-blog-posted-on">
                  <i>{this.state.datePosted}</i>
                </span>
              </div>
              <div>
                <div>
                  <Image
                    src="/assets/images/single-blog-page-image.png"
                    className="single-blog-page-image-div"
                  />
                </div>
                <div className="basic-content">
                  Retrieve the tooth, hold it by the crown (the part that is
                  usually exposed in the mouth), and rinse off the tooth root
                  with water if it’s dirty. Do not scrub it or remove any
                  attached tissue fragments. If possible, try to put the tooth
                  back in place. Make sure it’s facing the right way. Never
                  force it into the socket. If it’s not possible to reinsert the
                  tooth in the socket, put the tooth in a small container of
                  milk (or cup of water that contains a pinch of table salt, if
                  milk is not available) or a product containing cell growth
                  medium, such as Save-a-Tooth. In all cases, see your dentist
                  as quickly as possible. Knocked out teeth with the highest
                  chances of being saved are those seen by the dentist and
                  returned to their socket within 1 hour of being knocked out.
                </div>
                <h6 className="single-blog-subheading">
                  Do-It-Yourself Teeth Whitening
                </h6>
                <div className="basic-content">
                  You may be able to get rid of superficial stains by yourself.
                  A number of at-home tooth-whitening products — kits, strips,
                  toothpastes, and rinses— may lighten stains. There are even
                  some old-fashioned remedies you can try. Tooth-whitening
                  products available on drugstore shelves use mild bleach to
                  brighten yellow teeth. Toothpastes use abrasives and chemicals
                  to remove surface stains. For deep stains, you may need a
                  dentist help.
                </div>
                <h6 className="single-blog-subheading">Tooth-Whitening Kits</h6>
                <div className="basic-content">
                  A home tooth-whitening kit contains car amide peroxide, a
                  bleach that can remove both deep and surface stains and
                  actually changes your natural tooth color. If you have
                  coffee-stained teeth, a tooth-bleaching kit can help. With
                  some kits, you apply a peroxide-based gel (with a small brush)
                  to the surface of your teeth. In other kits, the gel is in a
                  tray that molds to the teeth. The tray must be worn daily (for
                  30 to 45 minutes) for a week or more.
                </div>
                <div className="video-container-div">
                  <video className="blog-video" controls>
                    <source
                      src="https://youtu.be/lTDW5tt3S90"
                      type="video/mp4"
                    />
                    <source src="mov_bbb.ogg" type="video/ogg" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <div className="basic-content">
                  Retrieve the tooth, hold it by the crown (the part that is
                  usually exposed in the mouth), and rinse off the tooth root
                  with water if it’s dirty. Do not scrub it or remove any
                  attached tissue fragments. If possible, try to put the tooth
                  back in place. Make sure it’s facing the right way. Never
                  force it into the socket. If it’s not possible to reinsert the
                  tooth in the socket, put the tooth in a small container of
                  milk (or cup of water that contains a pinch of table salt, if
                  milk is not available) or a product containing cell growth
                  medium, such as Save-a-Tooth. In all cases, see your dentist
                  as quickly as possible. Knocked out teeth with the highest
                  chances of being saved are those seen by the dentist and
                  returned to their socket within 1 hour of being knocked out.
                </div>
                <h6 className="single-blog-subheading">
                  Do-It-Yourself Teeth Whitening
                </h6>
                <div className="basic-content">
                  You may be able to get rid of superficial stains by yourself.
                  A number of at-home tooth-whitening products — kits, strips,
                  toothpastes, and rinses— may lighten stains. There are even
                  some old-fashioned remedies you can try. Tooth-whitening
                  products available on drugstore shelves use mild bleach to
                  brighten yellow teeth. Toothpastes use abrasives and chemicals
                  to remove surface stains. For deep stains, you may need a
                  dentist help.
                </div>
                <h6 className="single-blog-subheading">Tooth-Whitening Kits</h6>
                <div className="basic-content">
                  A home tooth-whitening kit contains car amide peroxide, a
                  bleach that can remove both deep and surface stains and
                  actually changes your natural tooth color. If you have
                  coffee-stained teeth, a tooth-bleaching kit can help. With
                  some kits, you apply a peroxide-based gel (with a small brush)
                  to the surface of your teeth. In other kits, the gel is in a
                  tray that molds to the teeth. The tray must be worn daily (for
                  30 to 45 minutes) for a week or more. div{" "}
                </div>
              </div>
              <div></div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Footer />
      </React.Fragment>
    );
  }
}
