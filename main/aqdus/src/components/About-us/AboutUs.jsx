import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              At Study Sphere, we believe in the power of collaboration and communication in education. Our platform is designed to foster a vibrant community of learners and educators, where knowledge is shared, ideas are exchanged, and everyone has the opportunity to grow.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={25} duration={2} suffix="K" /> */}
                    </span>

                    <p className="counter__title">GET YOUR ANSWERS</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={12} duration={2} suffix="M" /> */}
                    </span>

                    <p className="counter__title">ANSWER TO OTHER'S QUESTION</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={95} duration={2} suffix="M" /> */}
                    </span>

                    <p className="counter__title">LIVE INTERACTION </p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={5} duration={2} suffix="K" /> */}
                    </span>

                    <p className="counter__title">ONE-TO-ONE CALLING</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
