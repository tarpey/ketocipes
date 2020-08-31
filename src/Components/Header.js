import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../Config/Toggler'

const Header = ({ theme, toggleTheme, history }) => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Ketocipes</Link>
        </h1>
        <p>Simple low carb recipes</p>
      </div>
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}

export default Header
