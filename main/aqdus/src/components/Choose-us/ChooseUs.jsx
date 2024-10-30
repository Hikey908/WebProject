import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                <strong>1. Community-Centric Learning:</strong> 
                At StudySphere, we prioritize collaboration. Our platform connects learners and educators, fostering a supportive community where everyone can share insights and learn from one another.
              </p>
              <p>
                <strong>2. Interactive Features:</strong> 
                We offer a unique blend of tools designed for effective learning. With our interactive forum and seamless video call capabilities, users can engage in discussions and collaborate in real-time, making learning dynamic and enjoyable.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="Choose Us" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i className="ri-play-circle-line" onClick={() => setShowVideo(!showVideo)}></i>
                </span>
              )}
            </div>
          </Col>
          </Row>
      </Container>

    </section>
  );
};

export default ChooseUs;
