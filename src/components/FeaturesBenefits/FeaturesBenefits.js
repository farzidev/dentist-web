import React, { Component } from "react";
import "./FeaturesBenefits.css";
import { Row, Col, Button } from "react-bootstrap";

export default class FeaturesBenefits extends Component {
  render() {
    return (
      <div className="features-benefits-container">
        <h3 className="features-benefits-header">Features & Benefits</h3>
        <Row noGutters className="features-benefits-base-row">
          <Col lg={6} md={6} className="features-benefits-left-col">
            <div className="features-benefits-left-col-division">
              <h4>
                This is how we <br />
                streamline our process
              </h4>
              <br />
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </span>
              <br />
              <br />
              <span>
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores.
              </span>
              <br />
              <br />
              <Button variant="success">View All &nbsp;--></Button>
              <br />
              <br />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <Row>
              <Col md={6} className="features-benefits-right-col-1">
                <div className="features-benefits-card-1">
                  <img
                    src="/assets/images/time.png"
                    alt="time"
                    height="50"
                    width="50"
                  />
                  <br />
                  <br />
                  <h6>Time Efficient</h6>
                  <span className="features-benefits-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
                <br />
                <div className="features-benefits-card-2">
                  <img
                    src="/assets/images/support3x.png"
                    alt="time"
                    height="50"
                    width="50"
                  />
                  <br />
                  <br />
                  <h6>Time Efficient</h6>
                  <span className="testimonial-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
              </Col>
              <br />
              <Col md={6} className="features-benefits-right-col-2">
                <div className="features-benefits-card-3">
                  <img
                    src="/assets/images/targetArrow3x.png"
                    alt="time"
                    height="50"
                    width="50"
                  />
                  <br />
                  <br />
                  <h6>Time Efficient</h6>
                  <span className="testimonial-card-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem totam rem ab illo veritatis et quasi.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
