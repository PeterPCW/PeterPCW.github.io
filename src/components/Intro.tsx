import React from 'react'
import hexagon from '../images/profile-hex.png'
import { TypeAnimation } from 'react-type-animation'

function Intro() {

  const h2style = { margin: '16.5px 16.5px 16.5px 60px', fontSize: '2em', fontWeight: 'bold', display: 'inline-block' }

  return <section className="section" id="intro">
    <section className="content">
      <div className="title-container">
        <h1 className="title"><span className="orange">{'//'}</span> Peter Williams</h1>
        <TypeAnimation
          sequence={[
            'SaaS Developer',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={h2style}
        />
        <TypeAnimation
          sequence={[
            1100, // Waits 1/3s
            'Prompt Engineer',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={h2style}
        />
        <TypeAnimation
          sequence={[
            2200, // Waits 1/3s
            'Customer Champion',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={h2style}
        />
        <TypeAnimation
          sequence={[
            3300, // Waits 1/3s
            'Experimental Chef',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={h2style}
        />
      </div>
      <div></div>
      <div className="image-container">
        <img src={hexagon} alt="That's me!" className="profile" />
      </div>
    </section>

  </section>
}

export default Intro