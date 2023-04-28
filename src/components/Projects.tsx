/* TODO */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Fade } from 'react-reveal'
import projects from '../API/projects'
import link from '../images/svg-icons/link-new.svg'
import github from '../images/hexes/github-hex.svg'
import magnify from '../images/exp-logos/magnify.svg'
import exit from '../images/exp-logos/exit.svg'

function Projects() {
  const [projectIndex, updateProjectIndex] = useState(0)
  const [projectArr, updateProjectArr] = useState(projects)

  function handleChangeProj(e) {
    e.preventDefault()
    const newIndex = Number(e.target.value)
    if (projectIndex === newIndex) {
      return
    }
    const projectData = []

    projectArr.map((project, i) => {
      if (i === newIndex) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(newIndex)
  }

  function handleLeftButton(e) {

    e.preventDefault()
    let indexValue = null
    if (projectIndex === 0) {
      indexValue = projectArr.length - 1
    } else {
      indexValue = projectIndex - 1
    }
    const projectData = []

    projectArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(indexValue)
  }

  function handleRightButton(e) {
    e.preventDefault()
    let indexValue = null
    if (projectIndex === projectArr.length - 1) {
      indexValue = 0
    } else {
      indexValue = projectIndex + 1
    }
    const projectData = []

    projectArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(indexValue)
  }

  return <section className="section" id="projects">
    <section className="content">
      <div className='buttons'>
        <button className='proj-button' onClick={handleLeftButton}>⁌</button>
        {projectArr.map((proj, i) => {
          return <button value={i} className={`${proj.isActive} proj-button`} onClick={handleChangeProj} key={i}>⌬</button>
        })}
        <button className='proj-button' onClick={handleRightButton}>⁍</button>
      </div>
      <Slides project={projectArr[projectIndex]} />
    </section>
  </section>
}

const Slides = ({ project }: { project: ProjectType }) => {
  const linkObj = { name: 'Link', svg: link }

  if (project.name === undefined || !project.name) {
    return
  } else return <div key={project.name} className="project-box">
    <article className="pt-one">
      <div className="mapped-skills project-skills">
        {project.techs.map((tech, i) => {
          return <div key={i} className="skill-box">
            <div className="name-container proj-name-cont" >
              <p>{tech.name}</p>
            </div>
            <img src={tech.svg} alt={tech.name} className="devicon" />
          </div>
        })}
      </div>
      < Image image={project.images} />

    </article>
    <article className="pt-two">
      <div className="proj-text">
        <h2>{project.name}</h2>
        <p>{project.desc}</p>
      </div>
      <div className="proj-nav">
        <a href={project.page} target="_blank" rel="noreferrer" className="page-link">
          <div className="skill-box">
            <div className="name-container" >
              <p><span className="orange">Project</span> </p>
            </div>
            <img src={linkObj.svg} alt={linkObj.name} />
          </div>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="page-link">
          <div className="skill-box">
            <div className="name-container" >
              <p><span className="orange">Readme</span> </p>
            </div>
            <img src={github} alt="GitHub" />
          </div>
        </a>
      </div>
    </article>
  </div>
}

const Image = ({ image }) => {
  const imageArr = image
  const [imageIndex, updateImageIndex] = useState(0)
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)

  function handleLeftButton(e) {

    e.preventDefault()
    let indexValue = null
    if (imageIndex === 0) {
      indexValue = imageArr.length - 1
    } else {
      indexValue = imageIndex - 1
    }

    updateImageIndex(indexValue)
  }

  function handleRightButton(e) {
    e.preventDefault()
    let indexValue = null
    if (imageIndex === imageArr.length - 1) {
      indexValue = 0
    } else {
      indexValue = imageIndex + 1
    }

    updateImageIndex(indexValue)
  }

  const showImage = () => {
    setLightBoxDisplay(true)
  }
  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  return <div className="proj-img" >
    <div
      className="img-cont"
    >
      <div className="border">
        {imageArr.map((image, i) => {
          if (i !== imageIndex) {
            return
          } else {
            return <Fade key={i}>
              <img className='thumb' src={image.img} onClick={() => showImage()} />
              <div className="magnify">
                <img src={magnify} alt="Magnify" />
              </div>
            </Fade>
          }

        })}
      </div>
      {lightboxDisplay ?
        <div id="lightbox" >
          <div
            className="lightbox-cont" onClick={hideLightBox}
          >
            {imageArr.map((image, i) => {
              if (i !== imageIndex) {
                return
              } else {
                return <Fade key={i}>
                  <img
                    id="lightbox-img" src={image.img} 
                    style={{ height: 'auto', maxWidth: '95wv', width: '100%' }}
                  ></img>
                  <div className="magnify">
                    <img src={exit} alt="Exit" />
                  </div>

                </Fade>
              }
            })}
          </div>
          <div className="descbar">
            <button onClick={handleLeftButton} ><span className="orange">&#60;&#60;</span></button>
            <p>{imageArr[imageIndex].desc}</p>
            <button onClick={handleRightButton}><span className="orange">&#62;&#62;</span></button>
          </div>
        </div>
        : ''}

    </div>
    <div className="descbar">
      <button onClick={handleLeftButton} ><span className="orange">&#60;&#60;</span></button>
      <p>{imageArr[imageIndex].desc}</p>
      <button onClick={handleRightButton}><span className="orange">&#62;&#62;</span></button>
    </div>
  </div>
}

Projects.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        svg: PropTypes.any.isRequired,
      })
    ).isRequired,
    type: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ).isRequired,
    isActive: PropTypes.string.isRequired,
  }).isRequired,
};

type ProjectType = {
  name: string;
  techs: {
    name: string;
    svg: any;
  }[];
  type: string;
  days: number;
  desc: string;
  github: string;
  page: string;
  images: {
    img: any;
    desc: string;
  }[];
  isActive: string;
};

Slides.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        svg: PropTypes.any.isRequired,
      })
    ).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
  }).isRequired,
};

Image.propTypes = {
  image: PropTypes.arrayOf(
  PropTypes.shape({
    img: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
};

export default Projects