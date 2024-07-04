import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Proposal from './pages/Proposal'
import CaseStudy from './pages/CaseStudy'
import WorkingProcess from './pages/WorkingProcess'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Homepage />
    <Services />
    <Proposal />
    <CaseStudy />
    <WorkingProcess />
    <Team />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
