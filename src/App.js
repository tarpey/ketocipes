import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Recipe from './Components/Recipe'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Config/GlobalStyles'
import { lightTheme, darkTheme } from './Config/Themes'
import { useDarkMode } from './Config/UseDarkMode'

export default () => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Header theme={theme} toggleTheme={themeToggler} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
