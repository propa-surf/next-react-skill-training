import React, {useContext} from 'react'
import {modeContext} from './context/ModeContext'

function Profile() {

  const {darkMode, setDarkMode} = useContext(modeContext)

  return (
    <div className={darkMode === true ?"profile profile-dark" : "profile"}>
        <h3>Profile</h3>
    </div>
  )
}

export default Profile