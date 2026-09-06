import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiPrisma,
  SiJira
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons pt-4">
         <FaGithub className="icon"/>
        <p className="tools-hover fs-6 mb-0 mt-0" >Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-4">
        <SiVisualstudiocode />
        <p className="tools-hover fs-6 mb-0 mt-0" >VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-4">
        <SiPostman />
        <p className="tools-hover fs-6 mb-0 mt-0" >PostMan</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-4">
        <SiSlack />
        <p className="tools-hover fs-6 mb-0 mt-0" >Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-4">
        <SiPrisma/>
        <p className="tools-hover fs-6 mb-0 mt-0" >Prisma ORM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-4">
        <SiJira/>
        <p className="tools-hover fs-6 mb-0 mt-0" >Jira</p>
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

export default Toolstack;
