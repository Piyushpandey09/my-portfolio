import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Style/AboutPage.css";


const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            {/* Left Animation (Slide In) */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Ensure the Lottie player script is included in index.html */}
              <lottie-player
                src='https://assets.lottiefiles.com/packages/lf20_iv4dsx3q.json' 
                //src="https://assets7.lottiefiles.com/packages/lf20_touohxv0.json"

                background="transparent"
                speed="1"
                style={{ width: "70%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </motion.div>
          </Col>

          <Col md={7}>
            {/* Right Animation (Fade In) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <p className="home-about-body">
                My name is <b className="purple"> Piyush Pandey </b> and I am a{" "}
                <b className="purple">Computer Science and Engineering</b> student at{" "}
                <b className="purple">S.I.E.T PRAYAGRAJ</b>
                <br />
                <br />
                I am proficient in various programming languages such as{" "}
                <b className="purple">C, Java, HTML, CSS, and JavaScript</b>.
                <br />
                <br />
                I also have experience working with frameworks and libraries such as{" "}
                <b className="purple">NodeJS, ReactJS, etc.</b>.
                <br />
                <br />
                Whenever possible, I apply my passion for developing products using{" "}
                <b className="purple">modern JavaScript libraries and frameworks</b>.
                <br />
                <br />
                In my free time, I enjoy learning new technologies and{" "}
                <b className="purple">building web technologies and products</b>.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
