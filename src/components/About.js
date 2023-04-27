import React, { useState } from 'react'
import aboutMeArr from '../API/about'
import instagramLogo from '../images/exp-logos/twitter-logo.png'

const About = () => {

  const [interestIndex, updateInterestIndex] = useState(0)
  const [interestArr, updateInterestArr] = useState(aboutMeArr)

  function handleChangeInterest(e) {
    e.preventDefault()
    const newIndex = Number(e.target.value)
    if (interestIndex === newIndex) {
      return
    }
    const projectData = []

    interestArr.map((project, i) => {
      if (i === newIndex) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateInterestArr(projectData)
    updateInterestIndex(newIndex)
  }

  const currentInterest = interestArr[interestIndex]

  return <section className="section" id="about">
    <section className="content">
      <div className="about-box">
        <article className="pt-one">
          <h3><span className="orange">{'//'}</span> A Little About Me</h3>
          <ul className="tabs">
            {aboutMeArr.map((interest, i) => {
              return <button className={`${interest.isActive} interest-tab`} value={i} key={interest.title} onClick={handleChangeInterest}>{interest.title}</button>
            })}
          </ul>
        </article>
        <article className="pt-two">
          {/*<div className="img-cont">
            <img src={currentInterest.image} />
          </div>*/}
        </article>
        <article className="pt-three">
          <div>
            <h3><span className="orange">{'//'}</span> {currentInterest.title}</h3>
            <p>{currentInterest.desc}</p>
          </div>
        </article>
      </div>
    </section>
  </section>
}

export default About