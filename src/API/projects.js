import skillArray from './skills'

import projOneOneScr from '../images/proj-imgs/proj-1/screenshot-1.png'
import projOneTwoScr from '../images/proj-imgs/proj-1/screenshot-2.png'
import projOneThreeScr from '../images/proj-imgs/proj-1/screenshot-3.png'
import projOneFourScr from '../images/proj-imgs/proj-1/screenshot-4.png'
import projOneFiveScr from '../images/proj-imgs/proj-1/screenshot-5.png'

import projTwoOneScr from '../images/proj-imgs/proj-2/screenshot-1.png'
import projTwoTwoScr from '../images/proj-imgs/proj-2/screenshot-2.png'
import projTwoThreeScr from '../images/proj-imgs/proj-2/screenshot-3.png'
import projTwoFourScr from '../images/proj-imgs/proj-2/screenshot-4.png'

import projThreeOneScr from '../images/proj-imgs/proj-3/screenshot-1.png'
import projThreeTwoScr from '../images/proj-imgs/proj-3/screenshot-2.png'
import projThreeThreeScr from '../images/proj-imgs/proj-3/screenshot-3.png'
import projThreeFourScr from '../images/proj-imgs/proj-3/screenshot-4.png'
import projThreeFiveScr from '../images/proj-imgs/proj-3/screenshot-5.png'

import projFourOneScr from '../images/proj-imgs/proj-4/screenshot-1.png'
import projFourTwoScr from '../images/proj-imgs/proj-4/screenshot-2.png'
import projFourThreeScr from '../images/proj-imgs/proj-4/screenshot-3.png'
import projFourFourScr from '../images/proj-imgs/proj-4/screenshot-4.png'

const projects = [
  {
    name: 'Sushi Sweeper',
    techs: [
      skillArray[0], skillArray[1], skillArray[4]
    ],
    type: 'Solo Project',
    days: 5,
    desc: 'A game based on Minesweeper built in JavaScript, involving recursion and 1D array logic. Features include changeable board size and difficulty setting.',
    github: 'https://github.com/ProDigresser/project-1',
    page: 'https://prodigresser.github.io/project-1/',
    images: [
      { img: projOneOneScr, desc: 'Game Board And Options' }, 
      { img: projOneTwoScr, desc: 'Game In Progress (Medium Board)' }, 
      { img: projOneFiveScr, desc: 'Game In Progress (Small Board)' },
      { img: projOneThreeScr, desc: 'Game Victory' }, 
      { img: projOneFourScr, desc: 'Game Over, High Scores' }
    ],
    isActive: 'is-active'
  },
  {
    name: 'Just Eat App',
    techs: [
      skillArray[5], skillArray[3], skillArray[11], skillArray[13]
    ],
    type: 'Pair Project',
    days: 2,
    desc: 'A Just Eat React app that pulls from the JustEat API, whilst utilising NPM and WebPack. We pair programmed  for the core of the project and then coded independently.',
    github: 'https://github.com/ProDigresser/project-2',
    page: 'https://prodigresser.github.io/project-2/',
    images: [
      { img: projTwoOneScr, desc: 'Landing Page' }, 
      { img: projTwoTwoScr, desc: 'Restaurant List' }, 
      { img: projTwoThreeScr, desc: 'Restaurant Profile' }, 
      { img: projTwoFourScr, desc: 'Restaurant Details' }
    ],
    isActive: ''
  },
  {
    name: 'Seeded.',
    techs: [
      skillArray[5], skillArray[6], skillArray[7], skillArray[14]
    ],
    type: '4 Person Team',
    days: 7,
    desc: 'Using the MERN framework, we developed a feature rich app that helps people find plant sitters, integrating a map and social media components. My focus was on the back-end — designing endpoints, pulling from external APIs and serving to the front end.',
    github: 'https://github.com/ProDigresser/project-3',
    page: 'https://prodigresser-seeded.herokuapp.com/',
    images: [
      
      { img: projThreeOneScr, desc: 'Landing Page' }, 
      { img: projThreeTwoScr, desc: 'Home Page' }, 
      { img: projThreeThreeScr, desc: 'User Map and Navigation' }, 
      { img: projThreeFourScr, desc: 'Message Board' }, 
      { img: projThreeFiveScr, desc: 'Plant Library API' }
    ],
    isActive: ''
  },
  {
    name: 'HowTo-Tube',
    techs: [
      skillArray[8], skillArray[9], skillArray[15], skillArray[10]
    ],
    type: '3 Person Team',
    days: 6,
    desc: 'In this project, we designed a Python back end with Flask & PostgreSQL and a React.js front end for a self-improvement video site. We developed the database as a group before designing features independently. My areas of input were on the back end — designing the serializers and controllers.',
    github: 'https://github.com/ProDigresser/project-4',
    page: 'https://howto-tube.herokuapp.com/',
    images: [
      { img: projFourOneScr, desc: 'Landing Page' } , 
      { img: projFourTwoScr, desc: 'Signup Page' } , 
      { img: projFourThreeScr, desc: 'User Videos and Suggestions' } , 
      { img: projFourFourScr, desc: 'User/Following List' } 
    ],
    isActive: ''
  }
]

export default projects