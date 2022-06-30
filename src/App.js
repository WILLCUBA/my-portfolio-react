import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home'
//Components


import Navbar from './Components/Aside'
import AnimatedRoutes from './Components/AnimatedRoutes'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Home/>
      <AnimatedRoutes/>
    </Router>
    </>
  );
}

export default App;
