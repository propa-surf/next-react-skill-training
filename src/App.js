import './App.css';
import React, {useState} from 'react'
import Header from './Header'
import HomePage from './HomePage'
import Footer from './Footer'
import {modeContext} from './context/ModeContext'

function App() {

  const[darkMode, setDarkMode] = useState(false)

  return (
    <modeContext.Provider value={{darkMode, setDarkMode}} className="App">
     <Header/>
     <HomePage/>
     <Footer/>
    </modeContext.Provider>
  );
}

export default App;
