import React from 'react'
import skillArray from '../API/skills'
import learnArray from '../API/learning'

function Skills() {

  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <h2><span className="orange">{'//'}</span> Skills</h2>
        <article className="pt-one">
          <div className="skills-content">
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
            <div className="graphed-skills">
              <iframe src="https://peterpcw.github.io/ExperienceChart.html" title="Experience Chart" style={{overflow: 'hidden', top: '10%', left: 0, width: '125%', height: '125%', border: 0}}/>
            </div>
          </div>
        </article>
        <article className="pt-two">
          <div className="description">
            <p>My technical skills are on display above and across this simple portfolio site.</p>
            <p>Beyond the terminal or IDE I am:</p>
            <ul>
              <li>a team builder, proactively supporting and growing others</li>
              <li>an avid scripter, automating to maximize efficiency and consistency</li>
              <li>a keen designer, going the extra mile to get things just right</li>
              <li>a meticulous documenter, ensuring others can follow the trails I blaze</li>
            </ul>
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
      </div>
    </section>
  </section>
}

export default Skills