import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => setClicked(true)}>Click Me</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  )
}

function About() {
  return <h2>About Page</h2>
}

function Dashboard() {
  return <h2>Dashboard Page</h2>
}

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>closqtrs-app</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}