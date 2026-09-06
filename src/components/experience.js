import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from './Particle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { BsSuperscript } from 'react-icons/bs';
const Experience = () => {
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screenWidth state on window resize
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount


  console.log("screen width is ",screenWidth)
  return (
   <Container fluid className="project-section">
   <Particle />
   <Container>
     <h1 className="project-heading">
     My  <strong className="purple">Professional </strong>Journey
     </h1>
     <p style={{ color: "white" }}>
       Here are some highlights from my career.
     </p>
     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     
     <Timeline
            position={screenWidth > 386 ? "alternate-reverse" : undefined}
            sx={
              screenWidth <= 386 ? {
                '& .MuiTimelineItem-root:before': {
                  flex: 0,
                  padding: 0,
                }
              } : {}
            }
          >
      
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="white">
           <div>
           <p className="timeline-content-head"><strong className='purple'>System Engineer</strong> -- TCS</p>
            <p className='timeline-content-middle'>Current</p>
            <p className='timeline-content-middle'>- -</p>
           </div>
          </TimelineContent>
        </TimelineItem>
      
           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
           <p className="timeline-content-head"><strong className='purple'>Backend Intern</strong> -- KGK Infotech</p>
            <p className='timeline-content-middle'>Jun 2024 - Jul 2024</p>
            <p className='timeline-content-middle'>Work from Home</p>
           </div>
          </TimelineContent>
           </TimelineItem>


           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>Development Intern</strong> -- Simulanis Solutions Pvt. Ltd.</p>
            <p className='timeline-content-middle'>Mar 2024 - Jun 2024</p>
            <p className='timeline-content-middle'>Noida, Uttar Pradesh</p>
           </div>
          </TimelineContent>
           </TimelineItem>
           
           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>Web Development Intern</strong> -- Let’s Grow More</p>
            <p className='timeline-content-middle'>Mar 2023 - Apr 2023</p>
            <p className='timeline-content-middle'>Online</p>
            </div>
          </TimelineContent>
           </TimelineItem>
           
           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>Web Designing Internship</strong> -- Oasis Infobyte</p>
            <p className='timeline-content-middle'>Mar 2023 - Apr 2023</p>
            <p className='timeline-content-middle'>Online</p>
            </div>
          </TimelineContent>
           </TimelineItem>

           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>B.Tech</strong> -- Information Technology</p>
            <p className='timeline-content-middle'>Aug 2021 - July 20224</p>
            <p className='timeline-content-middle'>ABES Engineering College, Ghaziabad</p>
            </div>
          </TimelineContent>
           </TimelineItem>

           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>Electronics Manufacturing & testing </strong> -- Universal Electronics & Engineers</p>
            <p className='timeline-content-middle'>Dec 2020 - Jan 2021</p>
            <p className='timeline-content-middle'>Ghaziabad, Uttar Pradesh</p>
            </div>
          </TimelineContent>
           </TimelineItem>

           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent color="white">
           <div>
            <p className="timeline-content-head"><strong className='purple'>Diploma</strong> -- Electronics and Communication Engineering</p>
            <p className='timeline-content-middle'>Aug 2018 - June 2021</p>
            <p className='timeline-content-middle'>Pusa Institute of Technology, Delhi</p>
            </div>
          </TimelineContent>
           </TimelineItem>

           <TimelineItem>
             <TimelineSeparator>
               <TimelineDot />
             </TimelineSeparator>
             <TimelineContent color="white">
             <div>
            <p className="timeline-content-head"><strong className='purple'>10<span className='superscript'>th</span></strong> </p>
            <p className='timeline-content-middle'>2018</p>
            <p className='timeline-content-middle'>KDB Public School</p>
            </div>
             </TimelineContent>
           </TimelineItem>

    </Timeline>
     </Row>
   </Container>
 </Container>
  )
}

export default Experience