import React, {useContext} from 'react'
import {modeContext} from './context/ModeContext'

function Footer() {

  const {darkMode, setDarkMode} = useContext(modeContext)

  return (
    <div className={darkMode === true ?"footer footer-dark" : "footer"}>
        <h2>Footer</h2>
    </div>
  )
}

export default Footer