import React from 'react'

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigation = function (props) {
  const {setCurrentItem} = props

  return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Navbar.Brand href="#portfolio" className="display-5">William Pinero</Navbar.Brand>
                </Nav>
                <Nav>
                  <Nav.Link href="#portfolio" onClick={() => setCurrentItem("Portfolio")}>Portfolio</Nav.Link>
                  <Nav.Link href="#resume" onClick={() => setCurrentItem("Resume")}>Resume</Nav.Link>
                  <Nav.Link href="#aboutMe" onClick={() => setCurrentItem("AboutMe")}>About Me</Nav.Link>
                  <Nav.Link href="#contact" onClick={() => setCurrentItem("Contact")}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </> 
    )
}

export default Navigation