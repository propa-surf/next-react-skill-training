import React, {useContext} from 'react'
import {modeContext} from './context/ModeContext'

function Form() {

  const {darkMode, setDarkMode} = useContext(modeContext)

  return (
    <div className={darkMode === true ?"form form-dark" : "form"}>
        <h3>Form</h3>
    </div>
  )
}

export default Form