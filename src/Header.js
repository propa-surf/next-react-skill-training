import React, {useContext} from 'react'
import {modeContext} from './context/ModeContext'

function Header() {

  const {darkMode, setDarkMode} = useContext(modeContext)

  return (
    <div className={darkMode === true ?"header header-dark" : "header"}>
        <h2>Header</h2>
        <button onClick={()=>setDarkMode(!darkMode)}>{darkMode === true ?'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default Header