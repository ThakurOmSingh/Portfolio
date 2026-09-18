import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";
import { CertificatesList } from "./certificateList";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { style } from "@mui/system";

const Certificates = () => {
    const [certificateList,setCertificateList] = useState([...CertificatesList])
    const [sortByName,setSortByName] = useState(true)
    const [sortByDate,setSortByDate] = useState(false)
    const [sortAsc,setSortAsc] = useState(true)
    const [sortDesc,setSortDesc] = useState(false)
    
    return (
    <>
    {/* <style>
      {`
      .sortingDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 20px 35px;
  margin: 25px auto 35px;
  flex-wrap: wrap;
}

.sortGroup {
  display: flex;
  align-items: center;
  gap: 8px;
}

// .sortButton {
//   width: 180px;
//   min-width: 180px;
//   max-width: 180px;

//   background: transparent !important;
//   border: 1px solid #6D20C5 !important;
//   color: #6D20C5 !important;
// }

// .activeSortButton {
//   background: #6D20C5 !important;
//   border-color: #6D20C5 !important;
//   color: white !important;
//   cursor: pointer;
// }

.sortSeparator {
  margin: 0 2px;
  font-size: 24px;
  line-height: 1;
}

.purple {
  color: #c770f0;
}

@media (max-width: 768px) {
  .sortingDiv {
    gap: 10px;
    padding: 15px 10px;
  }

  .sortGroup {
    gap: 6px;
  }

  .sortButton {
    font-size: 13px;
    padding: 8px 10px;
  }

  .sortSeparator {
    display: none;
  }
}
      `}
    </style> */}
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications and achievements I've earned to strengthen my technical skills and professional knowledge.
        </p>
        {/* <div className="sortingDiv" style={{display:"flex"}}>

            <Button className={sortByName ? "button-container-button activeSortButton" : "button-container-button"} variant="primary" style={{ maxWidth: "250px" }}>Sort By Name</Button>
            <Button className={sortByDate ? "button-container-button activeSortButton" : "button-container-button"} variant="primary" style={{ maxWidth: "250px" }}>Sort By Issued Date</Button>
            <p className="sortSeparator"><strong className="purple">|</strong></p>
            <Button className={sortAsc ? "button-container-button activeSortButton" : "button-container-button"} variant="primary" style={{ maxWidth: "250px" }}>{sortByName ? "A-Z" : "Oldest First"}</Button>
            <Button className={sortDesc ? "button-container-button activeSortButton" : "button-container-button"} variant="primary" style={{ maxWidth: "250px" }}>{sortByName ? "Z-A" : "Newest First"}</Button>
        </div> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {
              certificateList.map((data,index) => (
                <Col md={4} className="project-card">
                            <Card className="project-card-view" >
      <Card.Img variant="top" src={data.image} alt="card-img" />
        <div className="project-card-button">
            <div className="button-container d-flex justify-content-center"> 
                <Button className='button-container-button' variant="primary" href={data} target="_blank">
                <MdZoomOutMap/> &nbsp;
                {"View Certificate"}
                </Button>
            </div>
        </div>
          </Card>

                    </Col>
                ))
              }
        </Row>
      </Container>
     </Container>
    </>
  )
}

export default Certificates