// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import "./features.css";

// const FeatureData = [
//   {
//     title: "Quick Learning",
//     desc: "Create or join virtual study sessions with your peers. StudySphere makes it easy to connect and collaborate in real time, ensuring that no question goes unanswered.",
//     icon: "ri-draft-line",
//   },

//   {
//     title: "Group Discussions",
//     desc: "Engage in discussions and ask questions in our forums. Whether you're seeking help on a specific topic or want to share your expertise, our community is here to support you.",
//     icon: "ri-discuss-line",
//   },

//   {
//     title: "Building Connections",
//     desc: "Foster collaborative learning by sharing your screen during meetings, simplifying the explanation of complex topics and enabling seamless group discussions and study sessions",
//     icon: "ri-contacts-book-line",
//   },
// ];

// const Features = () => {
//   return (
//     <section>
//       <Container>
//         <Row>
//           {FeatureData.map((item, index) => (
//             <Col lg="4" md="6" key={index}>
//               <div className="single__feature text-center px-4">
//                 <h2 className="mb-3">
//                   <i class={item.icon}></i>
//                 </h2>
//                 <h6>{item.title}</h6>
//                 <p>{item.desc}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Features;
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Create or join virtual study sessions with your peers. StudySphere makes it easy to connect and collaborate in real-time, ensuring that no question goes unanswered.",
    icon: "ri-draft-line",
  },
  {
    title: "Group Discussions",
    desc: "Engage in discussions and ask questions in our forums. Whether you're seeking help on a specific topic or want to share your expertise, our community is here to support you.",
    icon: "ri-discuss-line",
  },
  {
    title: "Building Connections",
    desc: "Foster collaborative learning by sharing your screen during meetings, simplifying the explanation of complex topics and enabling seamless group discussions and study sessions.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section className="features__section py-5">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center p-4 rounded shadow-sm">
                <h2 className="mb-3 feature-icon">
                  <i className={item.icon}></i>
                </h2>
                <h6 className="feature-title">{item.title}</h6>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
