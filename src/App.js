import React from 'react'
import './styles/style.scss'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Exp from './components/Exp'
import About from './components/About'
import Contact from './components/Contact'
import Spacer from './components/Spacer'
import Footer from './components/Footer'

const App = () => {
  return <main>
    < Intro />
    < Nav />
    < Projects />
    < Skills />
    < Exp />
    < About />
    < Spacer />
    < Contact />
    < Footer />
  </main>
}

export default App