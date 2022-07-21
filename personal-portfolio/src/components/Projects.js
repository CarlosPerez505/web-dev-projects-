import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import beautyPie from '../assets/img/beautypie-site.png';
import sAndS from  '../assets/img/sandstruck-site.png';
import tAndF from '../assets/img/tAndFOnline-site.png'


import 'animate.css';
import TrackVisibility from 'react-on-screen';
import beautypie from "../assets/img/beautypie-site.png";

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "E-commerce",
      imgUrl: projImg1,
    },
    {
      title: "blog",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Mobile App",
      description: "Design & Development",
      imgUrl: projImg3,
    },

  ];

  const projects2 = [
    {
      title: "Beautiepie.com",
      description: "E-commerce",
      imgUrl: beautyPie,
    },
    {
      title: "Sandstruck.com",
      description: "Business to business E-commerce",
      imgUrl: sAndS,
    },
    {
      title: "Tandfonline.com",
      description: "Journal content platform web/app",
      imgUrl: tAndF,
    },

  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects/Process</h2>
                <p>
                  What kind of services do you require?<br/>

                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Step 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Step 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Step 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <p>Here are some projects I helped build</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Contact me, discuss ideas, and lets build something great together!</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      < img className ="background-image-right" src={colorSharp2}/>
    </section>
  )
}
