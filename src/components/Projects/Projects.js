import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import choclate from "../../Assets/Projects/Choclate.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import pos  from "../../Assets/Projects/pos.png";
import helpdesk  from "../../Assets/Projects/helpdesk.png";
import billing  from "../../Assets/Projects/billing.png";
import school from "../../Assets/Projects/school.png";
import todo from "../../Assets/Projects/todo.png";
import tribute from "../../Assets/Projects/TributePage.png";
import youtube from "../../Assets/Projects/youtube.png";
import comingsoon from "../../Assets/Projects/comingsoon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billing}
              title="Digi-bill"
              description="Developed a billing application enabling users to store firm and customer details for easy access and management. The app features invoice generation, an integrated ledger for tracking financial transactions, and a to-do list for task management, streamlining business operations."
              tech_stack="MERN Stack, Prisma ORM, JWT Tokens, Bcrypt, BootStarp"
              ghLink="https://github.com/OmSinghJadon/BillingSystem-Backend"
              demoLink="https://digi-bill.vercel.app"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpdesk}
              title="Helpdesk"
              description="Developed a Helpdesk (Ticket Management System) with features for ticket tracking, issue resolution, and efficient customer support management."
              tech_stack="MERN Stack, Prisma ORM, JWT Tokens"
              ghLink="https://github.com/OmSinghJadon/HelpDesk-Backend"
              demoLink="https://ticketing-system-frontend.vercel.app/login"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              title="POS Application"
              description="Developed a retail POS system with features for item management, billing, and customer data handling."
              tech_stack="MERN Stack"
              ghLink="https://github.com/ThakurOmSingh/Retail-POS-Frontend"
              demoLink="https://retail-pos-frontend.vercel.app/home"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              
              title="Old Portfolio"
              description="My portfolio page: A concise display of my achievements, skills, and expertise."
              tech_stack="Html, Css"
              ghLink="https://github.com/ThakurOmSingh/My-Portfolio"
              demoLink="https://myportfolio-thakuromsinghjadon.netlify.app"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
               
              title="Todo List"
              description="A todo list is a concise tool for organizing and tracking tasks to be completed."
              tech_stack="Html, Css, Javascript"
              ghLink="https://github.com/ThakurOmSingh/My-Portfolio"
              demoLink="https://myportfolio-thakuromsinghjadon.netlify.app/todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
               
              title="Calculator"
              description="A calculator is a machine which allows people to do math operations more easily."
              tech_stack="Html, Css, Javascript"
              ghLink="https://github.com/ThakurOmSingh/My-Portfolio"
              demoLink="https://myportfolio-thakuromsinghjadon.netlify.app/calculator"
              />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tribute}
              title="Tribute Page"
              description="Honoring the indomitable spirit and heroic legacy of Maharana Pratap, a revered symbol of courage and leadership"
              tech_stack="Html, Css"
              ghLink="https://github.com/ThakurOmSingh/My-Portfolio"
              demoLink="https://myportfolio-thakuromsinghjadon.netlify.app/tribute2"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
               
              title="Youtube Video Downloader"
              description="It is a tool that allows users to save videos from YouTube onto their device for offline viewing"
              ghLink="https://github.com/ThakurOmSingh/Youtube-Video-Downloader/blob/main/maincode"
              tech_stack="Python, Pytube"
              // demoLink="https://myportfolio-thakuromsinghjadon.netlify.app/calculator"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingsoon}
               
              title=""
              description="More cool stuff is cooking! Stay tuned for the unveiling of our next big things!"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://myportfolio-thakuromsinghjadon.netlify.app/calculator"
              />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
