import React from 'react'
import {motion} from "framer-motion"
import {Card, Button} from "react-bootstrap"

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
            
            <div className="container">
            <div className="card">
                    <img fluid src={recipeFinder}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={findIt}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={runbuddy}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={raceOfTheYear}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={codeQuiz}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={weatherDashboard}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={budgetTracker}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div className="card">
                    <img fluid src={noteTaker}/>
                    <h3 className="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
        </div>

            {/* <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={runbuddy} />
                <Card.Body className="card-body">
                    <Card.Title>Run Buddy</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={findIt} />
                <Card.Body className="card-body">
                    <Card.Title>Find It</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={recipeFinder} />
                <Card.Body className="card-body">
                    <Card.Title>Recipe Finder</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={raceOfTheYear} />
                <Card.Body className="card-body">
                    <Card.Title>Race of The Year</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={codeQuiz} />
                <Card.Body className="card-body">
                    <Card.Title>Code Quiz</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={weatherDashboard} />
                <Card.Body className="card-body">
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" fluid src={budgetTracker} />
                <Card.Body className="card-body">
                    <Card.Title>Budget Tracker</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: '18rem', margin:"10px", padding: '5px' }}>
                <Card.Img variant="top" src={noteTaker} />
                <Card.Body className="card-body">
                    <Card.Title>Note Taker</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            </div>
        </motion.div>
    )

}

export default Portfolio