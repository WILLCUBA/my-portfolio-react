import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';

//Components
import Navbar from './Components/Aside'
import AnimatedRoutes from './Components/AnimatedRoutes'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <AnimatedRoutes/>
    </Router>
    </>
  );
}

export default App;
