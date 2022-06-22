import React from 'react'
import {motion} from "framer-motion"
import {Card, Button} from "react-bootstrap"
import recipeFinder from '../../assets/imgs/recipeFinder.jpg'
import findIt from '../../assets/imgs/findIt.png'
import runbuddy from '../../assets/imgs/runbuddy.jpg'

const Portfolio = function () {
    return (
        <motion.div
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth}}>
            <h1 className="portfolio-header-content text-center">Portfolio</h1>
            <div className="d-flex justify-content-center flex-wrap">
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src={runbuddy} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src={findIt} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src={recipeFinder} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </motion.div>
    )

}

export default Portfolio