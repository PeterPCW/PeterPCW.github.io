import React from 'react'
import linkedin from '../images/hexes/linkedin-hex.svg'
import github from '../images/hexes/github-hex.svg'
import hex from '../images/hexes/empty-hex.svg'

const Contact = () => {

  const myMailto = 'mailto:contact@byteplusbit.com&subject=Let\'s Work Together&body=Hello Peter! %0D%0A%0D%0AI saw your portfolio and I would like to discuss an opportunity with you -'

  return <section className="section" id="contact">
    <section className="content">
      <h2><span className="orange">{'//'}</span>Contact Me:</h2>
      <div className="contact-box">
        <div className="column">
          <a target="_blank" rel="noreferrer" href={myMailto}>
            <div className="hex-box hex-left">
              <img src={hex} alt="Contact" className="hex" />
              <div className="abs"><span>@</span></div>
            </div>
          </a>
        </div>
        <div className="column">
          <div className="spacer"></div>
          <a href="https://github.com/PeterPCW" target="_blank" rel="noreferrer">
            <div className="hex-box hex-right">
              <img src={github} alt="GitHub" />
            </div>
          </a>
        </div>
        <div className="column">
          <div className="spacer"></div>
          <div className="spacer"></div>
          <a href="https://www.linkedin.com/in/peterpcw/" target="_blank" rel="noreferrer">
            <div className="hex-box hex-left">
              <img src={linkedin} alt="Linkedin" />
            </div>
          </a>

        </div>
      </div>
      <div className="elem-spacer"></div>
    </section>
  </section>
}

export default Contact