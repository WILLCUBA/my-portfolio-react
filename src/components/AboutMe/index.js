import React from "react";
import {motion} from "framer-motion"
import { Tabs, Tab} from "react-bootstrap";

const AboutMe = function () {
        
        return (
            <motion.div className="about section">
                <Tabs defaultActiveKey="about" id="" className="m-3">
                    <Tab eventKey="Introduction" title="Introduction">
                      
                    </Tab>
                    <Tab eventKey="Why Developer?" title="Why Developer?">
                        
                    </Tab>
                    <Tab eventKey="Flaws/Virtues" title="Flaws/Virtues">
                   
                    </Tab>
                </Tabs>
            </motion.div>
        )
    
}

export default AboutMe

// eslint-disable-next-line
{/* <p>Full Stack Web Developer passionate about programming and logic. Recently earned a certificate in full-stack development from the University of Miami, with newly developed skills in JavaScript, CSS, React.js, responsive web design, and databases. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I worked on a team of four to develop a single-page MERN app that helps local business owners track their sales, inventory, and attendance at specialty events. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p> */}