import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/logo4.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Welcome to Study Sphere!<br />
                <span className="highlight">Learn Together,</span> <br />
                <span className="highlight">Achieve Together</span>
              </h2>
              <p className="mb-5">
                Study Sphere is an innovative online learning platform designed to enhance collaboration and communication in educational environments. It provides students and educators with essential tools for a richer learning experience.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="Study Sphere Logo" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
