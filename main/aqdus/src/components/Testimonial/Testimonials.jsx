import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
    <Container>
      <Row>
        <Col lg="10" md="12" className="m-auto">
          <div className="testimonial__wrapper d-flex justify-content-between align-items-center">
            <div className="testimonial__img w-50">
              <img src={img} alt="Happy Students" className="w-100" />
            </div>

            <div className="testimonial__content w-50">
              <h2 className="mb-4">What Students Say</h2>

              <Slider {...settings}>
                <div>
                  <div className="single__testimonial">
                    <h6 className="mb-3 fw-bold">
                      "A Game-Changer for Group Studies"
                    </h6>
                    <p>
                      StudySphere made collaboration so much easier. From sharing screens 
                      to organizing meetings, it helps our group stay on track and understand 
                      concepts better together.
                    </p>

                    <div className="student__info mt-4">
                      <h6 className="fw-bold">Aisha Khan</h6>
                      <p>Mumbai, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="single__testimonial">
                    <h6 className="mb-3 fw-bold">
                      "Best Platform for Remote Learning"
                    </h6>
                    <p>
                      Thanks to StudySphere, I can connect with my classmates, 
                      ask questions on the forums, and even join study sessions remotely. 
                      It has made online learning more interactive.
                    </p>

                    <div className="student__info mt-4">
                      <h6 className="fw-bold">Rohan Verma</h6>
                      <p>Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="single__testimonial">
                    <h6 className="mb-3 fw-bold">
                      "Great for Last-Minute Revisions"
                    </h6>
                    <p>
                      I love how easy it is to organize quick study meetings. We used the 
                      screen-sharing feature to revise for exams, and it really helped us 
                      clear doubts just in time.
                    </p>

                    <div className="student__info mt-4">
                      <h6 className="fw-bold">Sneha Patil</h6>
                      <p>Pune, India</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Testimonials;
