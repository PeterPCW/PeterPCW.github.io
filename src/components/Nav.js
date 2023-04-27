import React from 'react'

const Nav = () => {
  return <section className="section" id="nav">
    <section className="content">
      <ul className="navbar">
        <li><a href="#"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> Home</div></a></li>
        <li><a href="#projects"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> Proj</div></a></li>
        <li><a href="#skills"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> Skills</div></a></li>
        <li><a href="#exp"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> Exp</div></a></li>
        <li><a href="#about"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> About</div></a></li>
        <li><a href="#contact"><div className="nav-button"><span className="green"><strong>{'>>'}</strong></span> Contact</div></a></li>
      </ul>
    </section>

  </section>
}

export default Nav