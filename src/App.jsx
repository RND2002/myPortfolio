import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import SkillCard from './components/SkillCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-background'>
     <Dashboard/>
     {/* <SkillCard/> */}
     </div>
    </>
  )
}

export default App
