import React from 'react'
import './styles/style.scss'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Exp from './components/Exp'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spacer from './components/Spacer'

function App() {
  return <main data-testid="app-component">
    <Intro />
    <Nav />
    <Spacer />
    <Projects />
    <Skills />
    <Exp />
    <About />
    <Contact />
    <Footer />
  </main>
}

export default App