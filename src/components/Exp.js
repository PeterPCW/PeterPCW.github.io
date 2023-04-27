import React, { useState } from 'react'
import experience from '../API/experience'


const Exp = () => {
  const [expIndex, updateExpIndex] = useState(0)
  const [expArr, updateExpArr] = useState(experience)

  function handleChangeProj(e) {
    e.preventDefault()
    const newIndex = Number(e.target.value)
    if (expIndex === newIndex) {
      return
    }
    const projectData = []

    expArr.map((project, i) => {
      if (i === newIndex) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateExpArr(projectData)
    updateExpIndex(newIndex)
  }

  function handleLeftButton(e) {

    e.preventDefault()
    let indexValue = null
    if (expIndex === 0) {
      indexValue = expArr.length - 2
    } else {
      indexValue = expIndex - 2
    }
    const projectData = []

    expArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateExpArr(projectData)
    updateExpIndex(indexValue)
  }

  function handleRightButton(e) {
    e.preventDefault()
    let indexValue = null
    if (expIndex === expArr.length - 2) {
      indexValue = 0
    } else {
      indexValue = expIndex + 2
    }
    const projectData = []

    expArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateExpArr(projectData)
    updateExpIndex(indexValue)
  }

  return <section className="section" id="exp">
    <section className="content">  
      <div className="section-title">
        <div className="exp-box">
          <article className="pt-one">
            <div className="logo-cont">
              <img className="logo" src={expArr[expIndex].img} alt={expArr[expIndex].org} />
              <div className="subhead">
                <h4><span className="orange">{'//'}</span> {expArr[expIndex].org}</h4>
              </div>
            </div>
          </article>
          <article className="pt-two">
            <div className="description">
              <h3>{expArr[expIndex].name} <span className="orange">—</span> {expArr[expIndex].date} <span className="orange">{'//'}</span> {expArr[expIndex].end}</h3>
              <p>{expArr[expIndex].desc}</p>
            </div>
          </article>
        </div>
        <div className='buttons exp-nav'>
          <button className='proj-button' onClick={handleLeftButton}>⁌</button>
          {expArr.filter((exp, i) => i % 2 === 0).map((exp, i) => {
            return <button value={i} className={`${exp.isActive} proj-button`} onClick={handleChangeProj} key={i}>⌬</button>
          })}
          <button className='proj-button' onClick={handleRightButton}>⁍</button>
        </div>
        <div className='buttons exp-nav'>
          <button className='proj-button' onClick={handleLeftButton}>⁌</button>
          {expArr.map((exp, i) => {
            return <button value={i} className={`${exp.isActive} proj-button`} onClick={handleChangeProj} key={i}>⌬</button>
          })}
          <button className='proj-button' onClick={handleRightButton}>⁍</button>
        </div>
        <div className="exp-box">
          <article className="pt-one">
            <div className="logo-cont">
              <img className="logo" src={expArr[expIndex+1].img} alt={expArr[expIndex+1].org} />
              <div className="subhead">
                <h4><span className="orange">{'//'}</span> {expArr[expIndex+1].org}</h4>
              </div>
            </div>
          </article>
          <article className="pt-two">
            <div className="description">
              <h3>{expArr[expIndex+1].name} <span className="orange">—</span> {expArr[expIndex+1].date} <span className="orange">{'//'}</span> {expArr[expIndex+1].end}</h3>
              <p>{expArr[expIndex+1].desc}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </section>
}

export default Exp