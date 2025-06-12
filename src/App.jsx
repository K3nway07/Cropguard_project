import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import './Navbar.css'
import Navbar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Nodes from './Nodes.jsx'
import Reports from './Reports.jsx'
import Contact from './Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nodes" element={<Nodes />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  )
}

export default App
