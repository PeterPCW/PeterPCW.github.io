import college from '../images/exp-logos/MST_logo.png'
import bpb from '../images/exp-logos/byte+bit.png'
import ca from '../images/exp-logos/codecademy-logo.png'
import ni from '../images/exp-logos/nationalinstruments-logo.png'

const experience = [
  {
    name: 'Byte Plus Bit',
    date: '2023', end: 'Present',
    desc: 'A new venture to formalize my freelance work. I plan to work on small SaaS projects to fill my own painpoints, just as soon as I build the website!',
    img: bpb,
    org: 'Byte Plus Bit',
    isActive: 'is-active'
  },
  {
    name: 'Systems Software, Test Engineering, Product Support',
    date: '2011', end: '2023',
    desc: 'I held multiple engineering roles during 12 years with NI, migrating deeper into technical software roles with each jump. My favorite parts were working directly with customers and automating processes.',
    img: ni,
    org: 'National Instruments',
    isActive: ''
  },
  {
    name: 'Self Guided // Freelance',
    date: 'Sept 2017', end: 'Present',
    desc: 'My language exploration started at Codecademy but these days I learn through building and troubleshooting projects.',
    img: ca,
    org: 'Codecademy',
    isActive: ''
  },
  {
    name: 'B.S. Mechanical Engineering',
    date: '2006', end: '2010',
    desc: 'Graduated with honors but never had my sights set on traditional mechanical roles.',
    img: college,
    org: 'Missouri S&T',
    isActive: ''
  }
]

export default experience