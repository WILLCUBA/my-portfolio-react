import React from 'react';
import {motion} from 'framer-motion'
import portfolio from '../../assets/WilianPineroResume.PDF'
import {ProgressBar} from 'react-bootstrap'

const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5
          }
        }
      }
      
const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
        }

const Resume = function () {
        return (
            <motion.div>
                <div className="container text-center">
                        <p>Download Resume</p>
                        <a className="btn btn-danger" href={portfolio} download>
                                <i className="fa fa-file-pdf" aria-hidden="true"></i> Download PDF
                        </a>
                </div>
                <div className="Education m-4">
                <h1 className="text-center">Education</h1>
                <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="timeline">  
                        <motion.li
                        variants={item}>
                                <div className="direction-r">
                                        <div className="flag-wrapper">
                                                <span className="flag">Full Stack Web</span>
                                                <span className="time-wrapper"><span className="time">2021 - 2022</span></span>
                                        </div>
                                        <div className="desc">University Of Miami (Bootcamp), React, MongoDB, SQL, NoSQl, MERN, REDUX, JEST</div>
                                </div>
                        </motion.li>
                
        
                        <motion.li
                        variants={item}>
                                <div className="direction-l">
                                        <div className="flag-wrapper">
                                                <span className="flag">Python</span>
                                                <span className="time-wrapper"><span className="time">2021</span></span>
                                        </div>
                                        <div className="desc">300hrs Online Course, Scientific Computing with Python </div>
                                </div>
                        </motion.li>

                
                        <motion.li
                        variants={item}>
                                <div className="direction-r">
                                        <div className="flag-wrapper">
                                                <span className="flag">JavaScript</span>
                                                <span className="time-wrapper"><span className="time">2020</span></span>
                                        </div>
                                        <div className="desc">300hrs Online Course, JavaScript Algorithms and Data Structures</div>
                                </div>
                        </motion.li>

                        <motion.li
                        variants={item}>
                                <div className="direction-l">
                                        <div className="flag-wrapper">
                                                <span className="flag">HTML,CSS</span>
                                                <span className="time-wrapper"><span className="time">2019</span></span>
                                        </div>
                                        <div className="desc">300hrs Online Course, Responsive Web Design</div>
                                </div>
                        </motion.li>
                </motion.ul>
                </div>
                <div className="skills-section">
                        <div className="skills-header">
                                <h1>Skills</h1>   
                        </div>
                        <div className="skills-container d-flex justify-content-center flex-wrap">
                                <div className="card">
                                        <img src="https://img.icons8.com/color/344/html-5--v1.png" alt="" className="skills-icons"/>
                                        <div className="cont">
                                                <h2 className="card-title">HTML5</h2> 
                                        </div>
                                </div>
                                <div className="card">
                                <img src="https://img.icons8.com/color/344/css3.png" alt="" className="skills-icons"/>
                                        
                                        
                                   
                                        <div className="cont">
                                                <h2 className="card-title">CSS3</h2>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="" className="skills-icons"/>
                                        <div className="cont">
                                                <h2 className="card-title">JavaScript</h2>
                                        </div>
                                </div>
                                <div className="card">
                                <img src="https://avatars.githubusercontent.com/u/9950313?s=200&v=4" alt="" className="skills-icons"/>
                                        
                                        

                                        <div className="cont">
                                                <h2 className="card-title">NodeJS</h2>
                                        </div>
                                </div>
                                <div className="card">
                                <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="" className="skills-icons"/>
                                        
                                        

                                        <div className="cont">
                                                <h2 className="card-title">ReactJS</h2>
                                        </div>
                                </div>
                                <div className="card">
                                <img src="https://img.icons8.com/color/344/mysql-logo.png" alt="" className="skills-icons"/>
                                       
                                        
                                       
                                        <div className="cont">
                                                <h2 className="card-title">MySQL</h2>
                                        </div>
                                </div>
                                <div className="card">
                                <img src="https://img.icons8.com/color/344/mongodb.png" alt="" className="skills-icons"/>

                                        

                                        <div className="cont">
                                                <h2 className="card-title">MongoDB</h2>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src="https://img.icons8.com/color/344/amazon-web-services.png" alt="" className="skills-icons"/>
                                        
                                        

                                        <div className="cont">
                                                <h2 className="card-title">AWS</h2>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src="https://img.icons8.com/color/344/python--v1.png" alt="" className="skills-icons"/>
                        
                                                

                                        <div className="cont">
                                                <h2 className="card-title">Python</h2>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-jester-theme-park-flaticons-lineal-color-flat-icons.png" alt="" className="skills-icons"/>
                                        <div className="cont">
                                                <h2 className="card-title">Jest</h2>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src="https://symbols-electrical.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg" alt="" className="skills-icons"/>                            
                                        <div className="cont">
                                                <h2 className="card-title">ExpressJS</h2>
                                        </div>
                                </div>
                        </div>
        </div>
            </motion.div>
        )
}

export default Resume;