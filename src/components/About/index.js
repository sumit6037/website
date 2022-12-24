import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faChartSimple,
  faBrain,
  faRobot,
  faCodeCompare,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
//import { fa-chart-pie-simple, fa-brain-circuit, fa-user-visor, fa-drone-front, fa-brain, fa-robot  } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, my name is Sumit and I work as a Data Analyst In GlobalLogic
            India. I hold a Bachelor’s degree in Computer Science and
            Engineering.
          </p>
          <p>
            I have a passion for storytelling. I believe that words and data are
            the two most powerful tools to change the world.
          </p>
          <p>
            My day to the day work includes programming, working to derive
            insight from large datasets. My skills include data analysis,
            visualization, and machine learning
          </p>
          <p>
            You can take a look at some of my projects in the My Project section
            . I will link my work to their GitHub repositories, so feel free to
            download my code and play around with it. Most of my education has
            come from online platforms. I have downloaded e-books, audited
            courses on Udemy and Youtube, and spent countless hours on sites
            like FreeCodeCamp etc. I am grateful to online educators who have
            given me the opportunity to learn these things, and for
            democratizing education.
          </p>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faChartSimple} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faBrain} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faUser} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCodeCompare} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faRobot} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
