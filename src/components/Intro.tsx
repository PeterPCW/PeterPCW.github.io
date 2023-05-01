import React from 'react'
import hexagon from '../images/profile-hex.png'
import { TypeAnimation } from 'react-type-animation'

function Intro() {



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
          style={{ fontSize: '2em', margin: '0 0 0 10px', display: 'inline-block' }}
        />
        <div></div>
        <TypeAnimation
          sequence={[
            1500, // Waits 1/3s
            'Prompt Engineer',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ fontSize: '2em', margin: '0 0 0 20px', display: 'inline-block' }}
        />
        <div></div>
        <TypeAnimation
          sequence={[
            3000, // Waits 1/3s
            'Customer Advocate',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ fontSize: '2em', margin: '0 0 0 30px', display: 'inline-block' }}
        />
        <div></div>
        <TypeAnimation
          sequence={[
            4500, // Waits 1/3s
            'Experimental Chef',
            () => {
              // console.log('Sequence completed'); Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ fontSize: '2em', margin: '0 0 0 40px', display: 'inline-block' }}
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