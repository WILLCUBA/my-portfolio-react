import React from 'react'
import {motion} from "framer-motion"

// Images
import recipeFinder from '../../assets/imgs/recipeFinder.jpg'
import findIt from '../../assets/imgs/findIt.png'
import runbuddy from '../../assets/imgs/runbuddy.jpg'
import raceOfTheYear from '../../assets/imgs/raceOfTheYear.png'
import codeQuiz from '../../assets/imgs/codeQuiz.gif'
import weatherDashboard from '../../assets/imgs/wheatherDashboard.png'
import budgetTracker from '../../assets/imgs/budgetTracker.png'
import noteTaker from '../../assets/imgs/noteTaker.PNG'
import passGenerator from '../../assets/imgs/passwordGenerator.png'
import nodejs from '../../assets/imgs/nodejs.png'

const Portfolio = function () {

    return (
        <motion.div>
            <h1 className="portfolio-header-content text-center">Portfolio</h1>
            <div className="d-flex justify-content-center flex-wrap portfolio-cards-container">

                <div className="container justify-content-center">
                    <div className="card">
                        <img fluid src={recipeFinder} alt="project screenshot"/>
                        <h3 className="title text-center">Recipe Finder</h3>
                        <p className="project-technologies text-center text-muted">HTML, CSS, JavaScript, API</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://willcuba.github.io/recipe-finder/" role="button" target="_blank"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/recipe-finder" role="button" target="_blank"><i class="fa-brands fa-git-square"></i> Repo </a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={findIt} alt="project screenshot"/>
                        <h3 className="title text-center">Find It</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, MVC, JavaScript, SQL</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://limitless-beach-87360.herokuapp.com/login" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/FIND-IT" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={runbuddy} alt="project screenshot"/>
                        <h3 className="title text-center">Run Buddy</h3>
                        <p className="project-technologies text-muted text-center">Basics HTML and CSS</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://willcuba.github.io/run-buddy/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/run-buddy" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={raceOfTheYear} alt="project screenshot"/>
                        <h3 className="title text-center">Race Of The Year</h3>
                        <p className="project-technologies text-muted text-center">MERN STACK</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://ancient-sierra-07886.herokuapp.com/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/race-of-the-year" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={codeQuiz} alt="project screenshot"/>
                        <h3 className="title text-center">Code Quiz</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://willcuba.github.io/code-quiz-js/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/code-quiz-js" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                        
                    </div>
                    <div className="card">
                        <img fluid src={weatherDashboard} alt="project screenshot"/>
                        <h3 className="title text-center">Weather Dashboard</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, API</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://willcuba.github.io/weather-dashboard-js/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/weather-dashboard-js" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={budgetTracker} alt="project screenshot"/>
                        <h3 className="title text-center">Budget Tracker</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, API, Offline Functionality</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://tranquil-reaches-34119.herokuapp.com/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/budget-tracker" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={noteTaker} alt="project screenshot"/>
                        <h3 className="title text-center">Note Taker</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, Offline Functionality</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://cryptic-plains-22260.herokuapp.com/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/express-note-taker" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={passGenerator} alt="project screenshot"/>
                        <h3 className="title text-center">Password Generator</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, NodeJS, Promises</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://willcuba.github.io/password_generator/" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/password_generator" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nodejs} alt="project screenshot"/>
                        <h3 className="title text-center">Employee Tracker</h3>
                        <p className="project-technologies text-muted text-center">SQL, NodeJS App</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://drive.google.com/file/d/1SDYMeTM8L-YBYQiTsXV-ddHboTeA2ATQ/view" role="button"><i class="fa-solid fa-circle-play"></i>Video</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/employee-tracker-CMS" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={nodejs} alt="project screenshot"/>
                        <h3 className="title text-center">Team Profile Generator</h3>
                        <p className="project-technologies text-muted text-center">Promises, NodeJS App, Jest</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="https://drive.google.com/file/d/1XxK-7un5V7D05lFBD10U4eOQWTjTaHum/view" role="button"><i class="fa-solid fa-circle-play"></i>Video</a>
                            <a class="btn  btn-primary btn-project" href="https://github.com/WILLCUBA/team-profile-generator" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>                
        </div>

            </div>
        </motion.div>
    )

}

export default Portfolio