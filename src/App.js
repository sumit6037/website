import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import ProjectDisplay from './components/Portfolio/ProjectDisplay'
import Resume from './components/Resume'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work-experience" element={<Experience />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="project/:id" element={<ProjectDisplay />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  )
}

export default App
