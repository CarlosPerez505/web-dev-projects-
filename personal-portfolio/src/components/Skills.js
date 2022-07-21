import reactBootStrap from "../assets/img/react-bootstrap-logo.svg";
import react from "../assets/img/react-logo.svg";
import nodeJs from "../assets/img/node-js-icon.svg";
import dockers from "../assets/img/docker-logo.png";
import git from '../assets/img/git-logo-2color.png'
import type from '../assets/img/typescript-icon.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>AWS certificated Software Engineer with a great interest in working with the latest web and Mobile App technologies, and Full-stack web developer with a passion for building web/app that helps people with burning problems. Experience with React, NextJS, NodeJs, Laravel, PHP, Angular, React Native, and more. I love developing applications with beautiful UI/UX with NextJS and React. Currently, I am working on applications built on React with state management using MobX, but eventually, I love to be working with NextJS with GraphQL or even a REST API with React Query. With a great interest to begin learning Selenium to engineer smart contracts and DApps, A.K.A Blockchain tech. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>Javascript Framework</h5>
                            </div>
                            <div className="item">
                                <img src={reactBootStrap} alt="Image" />
                                <h5>Frontend Responsive Framework</h5>
                            </div>
                            <div className="item">
                                <img src={dockers} alt="Image" style={{width: '90%', padding: '2rem'}}/>
                                <h5>Virtual Container</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" style={{width: '90%', padding: '1rem'}} />
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={type} alt="Image" style={{padding: '1rem'}} />
                                <h5>Backend Static Language </h5>
                            </div>
                            <div className="item">
                                <img src={nodeJs} alt="Image" style={{width: '75%'}} />
                                <h5>Backend Run Time Environment</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
