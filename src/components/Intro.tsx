import React from 'react'
import hexagon from '../images/profile-hex.png'
import Typing from 'react-typing-animation'

function Intro() {



  return <section className="section" id="intro">
    <section className="content">
      <div className="title-container">
        <Typing speed={87}>
          <h1 className="title"><span className="orange">{'//'}</span> Peter Williams</h1>
          <Typing.Delay ms={330} />
          <Typing.Speed ms={33} />
          <h2>Software Engineer</h2>
          <Typing.Delay ms={330} />
          <Typing.Speed ms={33} />
          <h2>SaaS Developer</h2>
          <Typing.Delay ms={330} />
          <Typing.Speed ms={33} />
          <h2>Experimental Chef</h2>
          <Typing.Delay ms={330} />
          <Typing.Speed ms={33} />
          <h2>Dad Joker<Typing.Speed ms={33} />...</h2><Typing.Delay ms={10000000000} />
        </Typing>
      </div>
      <div></div>
      <div className="image-container">
        <img src={hexagon} alt="That's me!" className="profile" />
      </div>
    </section>

  </section>
}

export default Intro