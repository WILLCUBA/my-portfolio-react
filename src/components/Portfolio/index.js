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
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={findIt} alt="project screenshot"/>
                        <h3 className="title text-center">Find It</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, MVC, JavaScript, SQL</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={runbuddy} alt="project screenshot"/>
                        <h3 className="title text-center">Run Buddy</h3>
                        <p className="project-technologies text-muted text-center">Basics HTML and CSS</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={raceOfTheYear} alt="project screenshot"/>
                        <h3 className="title text-center">Race Of The Year</h3>
                        <p className="project-technologies text-muted text-center">MERN STACK</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={codeQuiz} alt="project screenshot"/>
                        <h3 className="title text-center">Code Quiz</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                        
                    </div>
                    <div className="card">
                        <img fluid src={weatherDashboard} alt="project screenshot"/>
                        <h3 className="title text-center">Weather Dashboard</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, API</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={budgetTracker} alt="project screenshot"/>
                        <h3 className="title text-center">Budget Tracker</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, API, Offline Functionality</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
                    <div className="card">
                        <img fluid src={noteTaker} alt="project screenshot"/>
                        <h3 className="title text-center">Note Taker</h3>
                        <p className="project-technologies text-muted text-center">HTML, CSS, JavaScript, Offline Functionality</p>
                        <div className="btns-container d-flex justify-content-center text-center">
                            <a class="btn  btn-primary btn-project" href="liveapp" role="button"><i class="fa-solid fa-circle-play"></i> Live</a>
                            <a class="btn  btn-primary btn-project" href="repo" role="button"><i class="fa-brands fa-git-square"></i> Repo</a>
                        </div>
                    </div>
        </div>

            </div>
        </motion.div>
    )

}

export default Portfolio