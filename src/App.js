import './App.css';
import React,{useState} from 'react'
//Components
import Navigation from './Components/Nav'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'

function App() {
  const [menuItems] = useState('Portfolio')

  const [currentItem, setCurrentItem] = useState(menuItems[0])

  return (
    <div className="App">
      <Navigation
      menuItems={menuItems}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
      />
      <Portfolio currentItem={currentItem}/>
      <Resume currentItem={currentItem}/>
      <AboutMe currentItem={currentItem}/>
      <Contact currentItem={currentItem}/>
    </div>
  );
}

export default App;
