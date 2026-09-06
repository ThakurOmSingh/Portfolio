import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { IoDocumentText } from "react-icons/io5";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {
          props.tech_stack && (
            <>
            <Card.Title>Tech Stack</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.tech_stack}
        </Card.Text>
            </>
          )
        }
      </Card.Body>
      <div className="project-card-button">

    <div className="button-container d-flex justify-content-center">
        {props.ghLink &&(  
        <Button className='button-container-button' variant="primary" href={props.ghLink} target="_blank">
          <IoDocumentText/> &nbsp;
          {"Guide"}
        </Button>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
          className="button-container-button"
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        </div>
      </div>
      <style>
        {
          `
            @media screen and (max-width: 300px) {
              .button-container {
                flex-direction : column;
                }
              .button-container-button {
                // margin:auto !important;
                margin:5px 10px 5px 10px  !important;
                }
              }
        `
        }
      </style>
    </Card>
  );
}
export default ProjectCards;
