import { Routes, Route } from 'react-router-dom'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import HomePage from './pages/homepage'

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App