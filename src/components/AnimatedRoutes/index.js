import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from '../Home'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import AboutMe from '../AboutMe'
import Contact from '../Contact'

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/about" element={<AboutMe/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;