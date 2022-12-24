import './index.scss'
import ProjectItem from './ProjectItem'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import { ProjectList } from '../.././helpers/ProjectList.js'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            )
          })}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
