import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/logo4.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Study Sphere !!<br /> Learn Together <br /> Achieve Together
              </h2>
              <p className="mb-5">
              Study Sphere is an innovative online learning platform designed to enhance collaboration and communication in educational environments. It provides students and educators with two key features
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
