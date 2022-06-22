import React from "react";
import {motion} from "framer-motion"

const AboutMe = function () {
        
        return (
            <motion.div className="about section"
            initial={{width:0}}
            animate={{width:"100%"}}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{x:window.innerWidth}}>
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content">
                            About
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    
}

export default AboutMe

// eslint-disable-next-line
{/* <p>Full Stack Web Developer passionate about programming and logic. Recently earned a certificate in full-stack development from the University of Miami, with newly developed skills in JavaScript, CSS, React.js, responsive web design, and databases. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I worked on a team of four to develop a single-page MERN app that helps local business owners track their sales, inventory, and attendance at specialty events. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p> */}