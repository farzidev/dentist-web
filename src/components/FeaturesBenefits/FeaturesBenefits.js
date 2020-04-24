import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeaturesBenefits.css";
import { Row, Col, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class FeaturesBenefits extends Component {
  render() {
    return (
      <div className="features-benefits-container">
        <h3 className="features-benefits-header">Features & Benefits</h3>
        <Row noGutters className="features-benefits-base-row">
          <Col lg={6} className="features-benefits-left-col">
            <div className="features-benefits-left-col-division">
              <h4 className="streamline-process">
                This is how we <br />
                streamline our process
              </h4>
              <br />
              <span className="streamline-content">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </span>
              <br />
              <br />
              <span className="streamline-content">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores.
              </span>
              <br />
              <br />
              <Link to="/founddoctors">
                <Button className="view-all-button">
                  Book&nbsp;Now&nbsp;
              </Button>
              </Link>
              <br />
              <br />
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="features-benefits-right-col-1"
              >
                <div className="features-benefits-card-1">
                  <div className="cards-header-container">
                    <svg className="time-svg" id="time" xmlns="http://www.w3.org/2000/svg" width="34.883" height="34.883" viewBox="0 0 34.883 34.883">
                      <path id="Path_1315" data-name="Path 1315" class="cls-1" d="M17.442,0A17.442,17.442,0,1,0,34.883,17.442,17.489,17.489,0,0,0,17.442,0Zm0,33.758A16.316,16.316,0,1,1,33.758,17.442,16.387,16.387,0,0,1,17.442,33.758Z" />
                      <path id="Path_1316" data-name="Path 1316" class="cls-1" d="M25.755,21.289V15.1a.563.563,0,0,0-1.125,0v6.189a2.4,2.4,0,0,0-1.688,1.688H19A.563.563,0,0,0,19,24.1h3.938a2.287,2.287,0,0,0,2.251,1.688,2.205,2.205,0,0,0,2.251-2.251A2.287,2.287,0,0,0,25.755,21.289Zm-.563,3.376a1.125,1.125,0,1,1,1.125-1.125A1.1,1.1,0,0,1,25.192,24.665Z" transform="translate(-7.751 -6.098)" />
                      <path id="Path_1317" data-name="Path 1317" class="cls-1" d="M29.662,8.474a.551.551,0,0,0,.563-.563V7.349a.563.563,0,1,0-1.125,0v.563A.551.551,0,0,0,29.662,8.474Z" transform="translate(-12.22 -2.848)" />
                      <path id="Path_1318" data-name="Path 1318" class="cls-1" d="M29.662,49.451a.551.551,0,0,0-.563.563v.563c0,.321.242,1.125.563,1.125s.563-.8.563-1.125v-.563A.551.551,0,0,0,29.662,49.451Z" transform="translate(-12.22 -20.757)" />
                      <path id="Path_1319" data-name="Path 1319" class="cls-1" d="M51.572,29.1h-.563a.563.563,0,0,0,0,1.125h.563a.563.563,0,0,0,0-1.125Z" transform="translate(-21.19 -12.224)" />
                      <path id="Path_1320" data-name="Path 1320" class="cls-1" d="M7.908,29.1H7.345a.563.563,0,1,0,0,1.125h.563a.563.563,0,0,0,0-1.125Z" transform="translate(-2.844 -12.224)" />
                      <path id="Path_1321" data-name="Path 1321" class="cls-1" d="M44.506,13.454v.563c-.227.227-.227.336,0,.563.113.113-.149.563,0,.563s.45-.45.563-.563l.563-.563c.227-.227.227-.336,0-.563A1.017,1.017,0,0,0,44.506,13.454Z" transform="translate(-18.625 -5.577)" />
                      <path id="Path_1322" data-name="Path 1322" class="cls-1" d="M14.013,43.51l-.563.563a1.015,1.015,0,0,0,0,1.125c.113.113.414,0,.563,0s.45.113.563,0v-.563a1.015,1.015,0,0,0,0-1.125C14.349,43.283,14.239,43.283,14.013,43.51Z" transform="translate(-5.573 -18.191)" />
                      <path id="Path_1323" data-name="Path 1323" class="cls-1" d="M45.068,43.509c-.227-.227-.336-.227-.563,0a1.015,1.015,0,0,0,0,1.125V45.2c.113.113.414,0,.563,0s.45.113.563,0a1.015,1.015,0,0,0,0-1.125Z" transform="translate(-18.625 -18.191)" />
                      <path id="Path_1324" data-name="Path 1324" class="cls-1" d="M14.575,13.454a1.015,1.015,0,0,0-1.125,0c-.227.227-.227.336,0,.563l.563.563c.113.113.414.563.563.563s-.113-.45,0-.563c.227-.227.227-.336,0-.563Z" transform="translate(-5.573 -5.577)" />
                    </svg>
                    <br />
                    <br />
                    <h6 className="card-header">Time Efficient</h6>
                  </div>
                  <span className="features-benefits-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
                <br />
                <div className="features-benefits-card-2">
                  <div className="cards-header-container">
                    <svg className="support-svg" xmlns="http://www.w3.org/2000/svg" width="35.056" height="35.604" viewBox="0 0 35.056 35.604">
                      <g id="support" transform="translate(-0.572)">
                        <g id="Group_315" data-name="Group 315" transform="translate(0.572 5.478)">
                          <g id="Group_314" data-name="Group 314" transform="translate(0 0)">
                            <path id="Path_1325" data-name="Path 1325" class="cls-1" d="M29.062,104.78l-1.1-3.834a4.385,4.385,0,0,0-3.287-2.739l-3.834-.548v-.548c.664-.385,1.183-.486,1.643-1.1h1.643c.944,0,1.643-1.247,1.643-2.191V87.252a7.863,7.863,0,0,0-7.669-7.669c-4.09,0-7.121,3.579-7.121,7.669v3.834a2.091,2.091,0,0,0,1.643,2.191,5.7,5.7,0,0,0,2.739,3.834v.548l-3.834.548a4.385,4.385,0,0,0-3.287,2.739v.548L6.057,99.85a.982.982,0,0,1,0-1.1L8.8,96.564,4.413,92.182,1.674,94.92a3.971,3.971,0,0,0,0,5.478l7.669,7.669c.754.754,1.672,1.643,2.739,1.643s2-.906,2.739-1.643l3.287-2.191-1.1-1.1ZM24.68,93.825c0,.315-.233,1.1-.548,1.1h-.548c.165-.377-.081-1.23,0-1.643.244-.051.886.122,1.1,0Zm-.548-1.643V89.991a1.369,1.369,0,0,1,0,2.191Zm-11.5,0a1.369,1.369,0,0,1,0-2.191Zm0-3.834V88.9c-.2.053-.371.444-.548.548V87.252a5.863,5.863,0,0,1,6.025-6.025c3.461,0,6.573,2.565,6.573,6.025v2.191c-.177-.1-.345-.5-.548-.548v-.548h-.548a7.229,7.229,0,0,1-4.93-1.643l-.548-1.1-.548,1.1a5.9,5.9,0,0,1-4.382,1.643Zm1.1,3.834V89.443a7.135,7.135,0,0,0,4.382-2.191,7.132,7.132,0,0,0,4.382,2.191v2.739a6.355,6.355,0,0,1-.548,2.739H18.107v1.1h3.287a5.26,5.26,0,0,1-3.287,1.1C15.59,97.111,13.725,94.7,13.725,92.182Zm6.025,5.478h0L18.107,99.3l-1.643-1.643h0a5.626,5.626,0,0,0,1.643.548A5.626,5.626,0,0,0,19.75,97.659ZM9.343,101.493A3.221,3.221,0,0,1,11.534,99.3l4.382-.548,2.191,2.191,2.739-2.191,3.834.548a3.22,3.22,0,0,1,2.191,2.191l.548,2.191h-11.5l-2.191-2.191-2.739,2.191c-.215.216-.332.216-.548,0l-1.1-1.1Zm-4.93-7.669,2.739,2.739-1.1.548L3.866,94.373Zm9.86,13.694a3.554,3.554,0,0,1-2.191,1.1c-.762,0-1.1-.557-1.643-1.1L2.77,99.85a3.548,3.548,0,0,1-1.1-2.191c0-.762.557-1.1,1.1-1.643v-.548l2.739,2.739h0a1.45,1.45,0,0,0,0,2.191l3.834,4.382a2.932,2.932,0,0,0,1.643.548,1.531,1.531,0,0,0,1.1-.548h0l2.739,2.191Zm1.1-1.1-2.739-2.739,1.1-.548,2.739,2.739Z" transform="translate(-0.579 -79.583)" />
                          </g>
                        </g>
                        <g id="Group_317" data-name="Group 317" transform="translate(24.673)">
                          <g id="Group_316" data-name="Group 316" transform="translate(0)">
                            <path id="Path_1326" data-name="Path 1326" class="cls-1" d="M345.138,0H337.47a1.6,1.6,0,0,0-1.643,1.643V6.025c0,.944.7,2.191,1.643,2.191h1.643l-1.1,3.287L343.5,8.216h1.643c.944,0,1.643-1.247,1.643-2.191V1.643A1.6,1.6,0,0,0,345.138,0Zm.548,6.025c0,.314-.233,1.1-.548,1.1H343.5l-3.834,2.191.548-2.191H337.47c-.314,0-.548-.781-.548-1.1V1.643a.533.533,0,0,1,.548-.548h7.669a.533.533,0,0,1,.548.548Z" transform="translate(-335.827)" />
                          </g>
                        </g>
                        <g id="Group_319" data-name="Group 319" transform="translate(26.864 2.191)">
                          <g id="Group_318" data-name="Group 318" transform="translate(0 0)">
                            <rect id="Rectangle_163" data-name="Rectangle 163" class="cls-1" width="7" height="1" transform="translate(-0.292 -0.191)" />
                          </g>
                        </g>
                        <g id="Group_321" data-name="Group 321" transform="translate(26.864 4.382)">
                          <g id="Group_320" data-name="Group 320" transform="translate(0 0)">
                            <rect id="Rectangle_164" data-name="Rectangle 164" class="cls-1" width="5" height="1" transform="translate(-0.292 -0.382)" />
                          </g>
                        </g>
                        <g id="Group_323" data-name="Group 323" transform="translate(32.342 4.382)">
                          <g id="Group_322" data-name="Group 322" transform="translate(0 0)">
                            <rect id="Rectangle_165" data-name="Rectangle 165" class="cls-1" width="1" height="1" transform="translate(0.23 -0.382)" />
                          </g>
                        </g>
                        <g id="Group_325" data-name="Group 325" transform="translate(0.572 1.643)">
                          <g id="Group_324" data-name="Group 324" transform="translate(0 0)">
                            <path id="Path_1327" data-name="Path 1327" class="cls-1" d="M18.1,23.875a15.956,15.956,0,0,0-15.337,12.6l-1.1-2.191-1.1.548,2.191,3.834L6.05,36.473l-.548-1.1-1.643,1.1A14.857,14.857,0,0,1,18.1,24.97a14.659,14.659,0,0,1,4.382.548l.548-1.1A17.168,17.168,0,0,0,18.1,23.875Z" transform="translate(-0.572 -23.875)" />
                          </g>
                        </g>
                        <g id="Group_327" data-name="Group 327" transform="translate(29.603 10.407)">
                          <g id="Group_326" data-name="Group 326" transform="translate(0 0)">
                            <path id="Path_1328" data-name="Path 1328" class="cls-1" d="M414.875,150.8l-3.287-2.191-2.191,3.834,1.1.548,1.1-1.643a12.246,12.246,0,0,1,.548,4.382,14.77,14.77,0,0,1-3.287,9.312l1.1,1.1a16.735,16.735,0,0,0,3.287-10.407,14.812,14.812,0,0,0-.548-4.93l1.643,1.1Z" transform="translate(-408.85 -148.613)" />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <br />
                    <br />
                    <h6 className="card-header">Support Team</h6>
                  </div>
                  <span className="features-benefits-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
              </Col>
              <br />
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="features-benefits-right-col-2"
              >
                <div className="features-benefits-card-3">
                  <div className="cards-header-container">
                    <svg className="target-svg" xmlns="http://www.w3.org/2000/svg" width="34.704" height="34.779" viewBox="0 0 34.704 34.779">
                      <path id="target-2" class="cls-1" d="M46.142,16.449a.908.908,0,0,0-.527-.527l-3.69-.527L41.4,11.7a.911.911,0,0,0-.527-.527c-.2-.058-.379-.148-.527,0l-4.218,4.218a15.985,15.985,0,0,0-21.088,3.69c-5.1,6.514-4.795,16.293,1.054,22.142a16.29,16.29,0,0,0,21.615,1.054,16.113,16.113,0,0,0,4.218-21.088l3.69-4.218C45.762,16.828,46.2,16.65,46.142,16.449Zm-3.163,13.18A14.5,14.5,0,0,1,31.908,43.863a15.47,15.47,0,0,1-17.4-6.854,15.382,15.382,0,0,1,2.636-18.452,14.521,14.521,0,0,1,17.925-2.109l-1.582,1.582c-.016.018.014-.02,0,0a12.4,12.4,0,0,0-15.816,3.69c-3.655,5.029-3.339,12.471,1.054,16.87a12.589,12.589,0,0,0,16.343,1.054,12.4,12.4,0,0,0,3.69-15.816c.021-.015.508.018.527,0l1.582-2.109A16.305,16.305,0,0,1,42.979,29.629Zm-5.272-5.8a11.4,11.4,0,0,1-3.163,14.761,11.009,11.009,0,0,1-14.761-1.054,11.7,11.7,0,0,1-1.054-15.289,11.265,11.265,0,0,1,14.761-2.636l.527,2.636-.527.527A8.771,8.771,0,0,0,21.364,35.428c3.382,3.382,9.163,3.8,12.653.527a8.628,8.628,0,0,0,.527-12.125l.527-1.054Zm-7.381,5.8c0,1.128-1.018,1.821-2.109,2.109a2.205,2.205,0,0,1-2.636-1.054,2.742,2.742,0,0,1,.527-3.163c.814-.782,1.675-.591,2.636,0L27.163,29.1c-.224.224-.224.3,0,.527a.911.911,0,0,0,1.054,0L29.8,28.048A3.767,3.767,0,0,1,30.326,29.629ZM29.8,26.466a3.439,3.439,0,0,0-4.745.527,3.4,3.4,0,0,0,0,4.745c1.338,1.339,3.3,1.755,4.745.527s2.164-3.211,1.054-4.745l2.636-3.163A7.654,7.654,0,0,1,22.418,34.9a7.539,7.539,0,0,1-.527-10.544,8.2,8.2,0,0,1,11.071-.527Zm10.544-5.8-2.109,2.109h0l-3.163-1.054-.527-3.163,5.8-5.8.527,3.163c.049.216.311-.049.527,0l2.636,1.054Z" transform="translate(-11.443 -11.097)" />
                    </svg>
                    <br />
                    <br />
                    <h6 className="card-header">Target The Best</h6>
                  </div>
                  <span className="features-benefits-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div >
    );
  }
}
