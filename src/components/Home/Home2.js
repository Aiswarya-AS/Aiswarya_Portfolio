import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image2.png";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            I totally fell in love with programming and I get a kick out of building web apps from scratch.
           
              
              <i>
                <b className="purple">  Python  </b>
              </i>
              is my jam.
              <br />
              <br />
              My main gig is all about building <i>
                <b className="purple"> cool web technologies and products</b>
                </i>. 
              I find it super interesting to come up with fresh ideas and push the boundaries of what can be done online.&nbsp;
             
              <br />
              <br />
              Whenever I can, I dive into<i><b className="purple">  Django,  </b>
              </i>
                along with the latest JavaScript libraries and frameworks like <i><b className="purple">React.js and Next.js</b></i>. 
              I'm all about using these awesome tools to create awesome stuff and make the web experience mind-blowing for users.
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
                  href="https://github.com/Aiswarya-AS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aiswarya-as-081b441b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.instagram.com/aiswarya.as"
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
