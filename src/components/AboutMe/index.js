import React from "react";
import {motion} from "framer-motion"
import './aboutMe.css'

const AboutMe = function () {
        
        return (
            <motion.div className="about section">
                <div class = "about-wrapper">
                    <div class = "about-left">
                        <div class = "about-left-content">
                        <div>
                            <div class = "shadow">
                                <div class = "about-img">
                                    <img src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" alt = "about"/>
                                </div>
                            </div>

                            <h2>Wilian Pinero Gonzalez</h2>
                            <h3>Full Stack Web Developer</h3>
                        </div>

                        <ul class = "icons">
                            <li><i class = "fab fa-facebook-f"></i></li>
                            <li><i class = "fab fa-twitter"></i></li>
                            <li><i class = "fab fa-linkedin"></i></li>
                            <li><i class = "fab fa-instagram"></i></li>
                        </ul>
                        </div>
                        
                    </div>

                    <div class = "about-right">
                        <h1>Hello<span>!</span></h1>
                        <h2>Here's who I am & what I do</h2>
                        <div class = "about-btns">
                            <button type = "button" class = "btn abuout-btn btn-pink">resume / CV</button>
                            <button type = "button" class = "btn about-btn btn-white">Git hub</button>
                        </div>

                        <div class = "about-para">
                            <p>I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities my current job position cannot provide.</p>
                            <p>My Professional Dream is to work every day doing logic <i style={{color:"yellow"}} class="fa-solid fa-lightbulb"></i>.</p>
                            <p>”Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.” <br/><span style={{color:"tomato"}}><i style={{color:"tomato"}} class="fa-solid fa-book-bible"></i> Joshua 1:9</span> </p>
                        </div>
                    </div>
                    </div>
            </motion.div>
        )
    
}

export default AboutMe

// eslint-disable-next-line
{/* <p>Full Stack Web Developer passionate about programming and logic. Recently earned a certificate in full-stack development from the University of Miami, with newly developed skills in JavaScript, CSS, React.js, responsive web design, and databases. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I worked on a team of four to develop a single-page MERN app that helps local business owners track their sales, inventory, and attendance at specialty events. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p> */}