import React from 'react'
import skillArray from '../API/skills'
import learnArray from '../API/learning'

function Skills() {

  return <section className="section" id="skills">
    <section className="content">
      <div className="skills-box">
        <article className="pt-two">
          <h2><span className="orange">{'//'}</span> Skills & Experience</h2>
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
          <iframe src="${process.env.PUBLIC_URL}/ExperienceChart.html" title="Experience chart" />
        </article>
        <article className="pt-one">
          <div>
            <p>My technical skills are on display above and across this simple portfolio site.</p>
            <p>Beyond what I can do in an IDE or at a terminal I am:</p>
            <ul>
              <li>⌬ a team builder, proactively supporting and growing others</li>
              <li>⌬ an avid scripter, automating to maximize efficiency and consistency</li>
              <li>⌬ a keen designer, going the extra mile to get things just right</li>
              <li>⌬ a meticulous documenter, making sure others can follow the trails I blaze</li>
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