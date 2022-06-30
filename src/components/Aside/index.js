import React from 'react' 
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'


const Aside = function () {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="aside-navbar" variant="dark">
                <Container fluid className="aside-container">
                <Navbar.Brand className="aside-name">
                    <NavLink to="/">William Pinero</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav aside-nav justify-content-center w-100">
                        <NavLink className="aside-nav-link active"   to="/">Home</NavLink>
                        <NavLink className="aside-nav-link"  to="/portfolio">Portfolio</NavLink>
                        <NavLink className="aside-nav-link"  to="/resume">Resume</NavLink>
                        <NavLink className="aside-nav-link"  to="/about">About Me</NavLink>
                        <NavLink className="aside-nav-link"  to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="danger" className="hire-me-btn">
                    <Link to="/contact">Hire Me</Link>
                </Button>
                </Container>
            </Navbar>
      </>
    )
}


export default Aside