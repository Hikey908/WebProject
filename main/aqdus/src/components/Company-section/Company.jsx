import React from "react";
import { Container, Row, Col } from "reactstrap";
import './company-section.css';

const Company = () => {
  return (
    <section className="company-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="2" md="3" sm="4" xs="6">
            <div className="company-item">
              <h3>
                <i className="ri-forum-line"></i> Forum
              </h3>
            </div>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <div className="company-item">
              <h3>
                <i className="ri-video-line"></i> Video Call
              </h3>
            </div>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <div className="company-item">
              <h3>
                <i className="ri-chat-line"></i> Live Interaction
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
