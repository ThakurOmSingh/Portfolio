import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Om Singh Jadon </span>
            from <span className="purple"> Ghaziabad, U.P., India.</span>
            <br />
            I am currently employed as a <em>Systems Engineer</em> at <em>Tata Consultancy Services.</em>
            <br />
            I have persued <strong>B.Tech</strong> in <em>Information Technology</em> from <em>ABES Engineering College, Ghaziabad</em>
            <br/>
            Also I have done <strong>Diploma</strong> in <em>Electronics & Communication Engineering</em> from <em>Pusa Institue of Technology, Delhi</em>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening good music
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping Others
            </li>
          </ul>

          <p style={{ color: "rgb(135, 182, 192)" }}>
            "Code with passion, create with purpose."
          </p>
          <footer className="blockquote-footer">Om Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
