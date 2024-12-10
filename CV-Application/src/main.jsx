import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './personal.css'
import './ed.css'
import './experience.css'
import Personal from './personal.jsx'
import './cvv.css'
import Title from './cvv.jsx'
import Education from './ed.jsx'
import Exp from './experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <Personal />
    <Education />
    <Exp />
  </StrictMode>,
)
