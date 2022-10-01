import React, {useContext} from 'react'
import Profile from './Profile'
import Form from './Form'
import {modeContext} from './context/ModeContext'

function HomePage() {

  const {darkMode, setDarkMode} = useContext(modeContext)

  return (
    <div className={darkMode === true ?"homepage homepage-dark" : "homepage"}>
        <h2>HomePage</h2>
        <div className='component-container'>
            <Profile/>
            <Form/>
        </div>
    </div>
  )
}

export default HomePage