import React from "react";
import { Container, Row, Col } from "reactstrap";
import './company-section.css';


const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i></i> Forum
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center nospace gap-1">
              <i></i> Video call
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center nospace gap-1">
              <i></i> Live Interaction
            </h3>
          </Col>

          {/* <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i></i> Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i></i> Finder
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i></i> Google
            </h2>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Company;
