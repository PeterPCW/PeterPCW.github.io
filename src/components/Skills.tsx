import React from 'react'
import skillArray from '../API/skills'
import learnArray from '../API/learning'

function Skills() {

  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <article className="pt-one">
          <div>
            <h2><span className="orange">{'//'}</span> Skills & Experience</h2>
            <p>I pride myself on finding the right tool for the job, which has given me a broad and odd topology of skills - a sample of which are displayed here.</p>
            <p>The core of my experience is in React, Node, and Python, with their respective frameworks. C++ has joined the team for some professional projects, and LabVIEW will always hold fond memories as my first.</p>
            <p>I am a scripter at heart who is always looking to automate (lest I forget how it works), but when I do require a UI, design and intuitive feel are just as important as function. And don&apos;t forget documentation!</p>
          </div>
          <div className="learning">
            <h3><span className="orange">{'//'}</span> Learning</h3>
            <div className="mapped-skills learning-skills">
              {learnArray.map((skill, i) => {
                return <div className="skill-box" key={i}>
                  <div className="name-container">
                    <p>{skill.name}</p>

                  </div>
                  <img src={skill.svg} alt={skill.name} className="devicon" />
                </div>
              })}
            </div>
          </div>
        </article>
        <article className="pt-two">
          <div className="mapped-skills">
            {skillArray.map((skill, i) => {
              return <div className="skill-box" key={i}>
                <div className="name-container">
                  <p>{skill.name}</p>
                </div>
                <img src={skill.svg} alt={skill.name} className="devicon" />
              </div>
            })}
          </div>
          <iframe src="./ExperienceChart.html" title="Experience chart" />
        </article>
      </div>
    </section>
  </section>
}

export default Skills