import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn ,FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            My journey into programming has been an exciting adventure, and I have embraced learning every step of the way.
              <br />
              <br />I am proficient in core languages such as 
              <i>
                <b className="purple"> Python, JavaScript, and HTML/CSS. </b>
              </i>
              <br />
              <br />
              My interests lie in creating innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>  I am particularly drawn to areas involving {" "}
                <b className="purple">
                Full Stack Development and Database management.
                </b>
              </i>
              <br />
              <br />
              Whenever I can, I channel my enthusiasm for development into building projects with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  MERN stack 
                </b>
              </i>
              &nbsp; and exploring tools like 
              <i>
                <b className="purple"> Prisma ORM.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ThakurOmSingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">

              <a
  href="https://wa.me/918744929960?text=Hello%20there!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="icon-colour home-social-icons"
>
  <FaWhatsapp />
</a>
  </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/om-singh-6352b420a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:thakuromsinghjadon@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
              <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/thakurom269?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
