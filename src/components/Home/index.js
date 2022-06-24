import React from "react";
import UseTypedSuperpower from '../TypedSuperpower'
import {motion} from "framer-motion"

const Home = function(props) {
    const superpowers = ['Full Stack Web Developer | Eternal Learner | Chess Player ']
    return (
        <>
        <motion.div className="home-container text-center">
            <div className="home-presentation-container">
                <h1 className="home-hello">Hello, I'm William</h1>
                
                <ul className="nav justify-content-center home-superpowers-icons-list">
                    <li><i className="fa fa-code"></i></li>
                    <li><i className="fa-solid fa-graduation-cap"></i></li>
                    <li><i className="fa-solid fa-chess"></i></li>
                </ul>
                <p className="home-superpowers">{UseTypedSuperpower(superpowers)}</p>

                <ul className="nav justify-content-center home-media-nav">
                    <li className="home-media-nav-item">
                        <a className="home-media-nav-link" href="https://www.linkedin.com/in/willpinero/"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li className="home-media-nav-item">
                        <a className="home-media-nav-link " href="https://github.com/WILLCUBA"><i className="fa-brands fa-github"></i></a>
                    </li>
                </ul>

            </div>
        </motion.div>
        </>
    )
}

export default Home;