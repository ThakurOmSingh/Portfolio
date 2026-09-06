import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql
} from "react-icons/di";
import { FaHtml5 , FaCss3Alt,FaBootstrap } from "react-icons/fa";
import {
  SiPostgresql,
  SiExpress,
  SiRedux,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      <p className="tools-hover fs-6 mb-0 mt-0" >Mongo DB</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      <p className="tools-hover fs-6 mb-0 mt-0" >Express Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      <p className="tools-hover fs-6 mb-0 mt-0" >React Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      <p className="tools-hover fs-6 mb-0 mt-0" >Node Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      <p className="tools-hover fs-6 mb-0 mt-0" >HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FaCss3Alt/>
      <p className="tools-hover fs-6 mb-0 mt-0" >CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      <p className="tools-hover fs-6 mb-0 mt-0" >JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      <p className="tools-hover fs-6 mb-0 mt-0" >MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      <p className="tools-hover fs-6 mb-0 mt-0" >Postgre SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      <p className="tools-hover fs-6 mb-0 mt-0" >Python</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      <p className="tools-hover fs-6 mb-0 mt-0" >Redux</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      <p className="tools-hover fs-6 mb-0 mt-0" >BootStrap</p>
      </Col>
      <style>
        {
          `
          .tech-icons:hover .tools-hover{
            opacity: 1 !important;
            
            }
            .tools-hover{
              opacity: 0;  /* Initially hidden */
              transition: opacity 0.3s ease-in-out;
            }

          `
        }
      </style>
    </Row>
  );
}

export default Techstack;
