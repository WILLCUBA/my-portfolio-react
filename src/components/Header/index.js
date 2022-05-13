import React, {useState} from 'react';
import Nav from '../Nav';
import AboutMe from '../About-Me'
import Portfolio from '../Portfolio'

function Header() {
    const [currentPage,setCurrentPage] = useState("About-Me")
    
    const renderPage = () => {
        if(currentPage === 'About-Me') {
            return <AboutMe/>
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio/>
        }
    }
    

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <header className="flex-row m-1">
        
        <div className="presentation-text">
            <img src={require('../../assets/myavatar.png')} alt="avatar"></img>
            <p>Hello, I'm</p>
            <h1>William Pinero Gonzalez</h1>
            <p>Full Stack Web Developer</p>
        </div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        </header>
    )
}

export default Header;