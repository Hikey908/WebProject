import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Study Sphere.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Byculla, Mumbai</p>
            <p> Phone: +88 0123456XXX </p>
            <p>Email: StudySphere@gmail.com</p>
          </Col> */}
          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Get in Touch</h6>

            <ul className="list-unstyled" style={{ fontSize: '1.1rem' }}>
              <li className="mb-3">
                <i className="ri-map-pin-line me-2" style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}></i>
                <span><strong>Address:</strong> Byculla, Mumbai, Maharashtra, India</span>
              </li>
              <li className="mb-3">
                <i className="ri-phone-line me-2" style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}></i>
                <span><strong>Phone:</strong> +91-123456XXXX</span>
              </li>
              <li className="mb-3">
                <i className="ri-mail-line me-2" style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}></i>
                <span><strong>Email:</strong> support@studysphere.com</span>
              </li>
            </ul>
          </Col>


        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
