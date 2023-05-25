import college from '../images/exp-logos/MST_logo.png'
import bpb from '../images/exp-logos/byte+bit.png'
import ca from '../images/exp-logos/codecademy-logo.png'
import ni from '../images/exp-logos/nationalinstruments-logo.png'

/*const college: React.ReactNode = <img src={mst} alt="Missouri S&T logo" />;
const bpb: React.ReactNode = <img src={bpblogo} alt="Byte Plus Bit logo" />;
const ca: React.ReactNode = <img src={calogo} alt="Codecademy logo" />;
const ni: React.ReactNode = <img src={nilogo} alt="National Instruments logo" />;*/

const experience = [
  {
    name: 'Byte Plus Bit',
    date: '2023', end: 'Present',
    desc: 'A new venture to formalize my freelance work. I release SaaS products targetted mostly to alleviate my own pain points. I will eventually compile a lower tier of info products, just as soon as I build the website!',
    img: bpb,
    org: 'Byte Plus Bit',
    isActive: 'is-active'
  },
  {
    name: 'Systems Software, Hardware Test, Product Support',
    date: '2011', end: '2023',
    desc: 'I held multiple engineering roles during 12 years with NI working mainly in LabVIEW, C++, and TestStand. I made multiple moves advancing to deeper technical roles. My favorite parts were working directly with customers and automating processes.',
    img: ni,
    org: 'National Instruments',
    isActive: ''
  },
  {
    name: 'Self Guided // Personal',
    date: 'Sept 2017', end: 'Present',
    desc: 'My language exploration started at Codecademy but these days I learn through building and troubleshooting projects. I have created apps, websites, bots, and browser extensions to automate workflows and wrap them in amazing user experiences.',
    img: ca,
    org: 'Codecademy',
    isActive: ''
  },
  {
    name: 'B.S. Mechanical Engineering',
    date: '2006', end: '2010',
    desc: 'Graduated with honors but never had my sights set on traditional mechanical roles. I was a designer and maker at heart and love combining the two in software.',
    img: college,
    org: 'Missouri S&T',
    isActive: ''
  }
]

export default experience