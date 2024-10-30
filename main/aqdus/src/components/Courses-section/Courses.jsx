import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/forum.png";
import courseImg2 from "../../assests/images/videocall.png";
import courseImg3 from "../../assests/images/studyplan.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Forum: Get Your Questions Answered",
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Video Call: One-to-One Live Interaction",
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "Study Plan: Create Your Perfect Study Strategy",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Key Features</h2>
                <p>
                  Study Sphere combines an interactive forum for real-time discussions with integrated video calls for virtual study sessions. With features like screen sharing and file sharing, it’s the perfect platform for collaborative learning.
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
