import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import AgencyLandingPage from './Page/AgencyLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AgencyLandingPage/>
    </>
  )
}

export default App