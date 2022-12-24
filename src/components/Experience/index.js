import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import TagCloud from 'TagCloud' //to be removed
import Loader from 'react-loaders'
import './index.scss'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'W',
                'o',
                'r',
                'k',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <h2>Software Engineer/Data Analyst</h2>
          <h3>Globallogic India</h3>
          <p>
            My work in the Compnany entails designing and maintaining data
            pipelines that ingest data onto the Google Features.{' '}
          </p>
          <h4>1. Covid Pipelines</h4>

          <p>
            Objective of designing the pipeline is to ingest cases stas, death
            stats,hospitalisation stats for all the available location. The are
            various sources from where we take data and ingest data in the
            pipeline.The project involves various steps namely Data Scoping,ETL
            setup,mapping the data to the schema,data quality audit etc.{' '}
          </p>
          <h5>2. Weather Pipeline</h5>

          <p>
            The Motivation for creating the pipeline was to ingest weather data
            by fetching the response by hitting the weather API with the input
            coordinates. The project involves various steps namely Data
            Scoping,ETL setup,mapping the data to the schema,data quality audit
            etc.
          </p>
          <h6>3. Pubic Event data pipeline</h6>

          <p>
            The ask of the client was to develop pipeline that would fetch data
            from the storage graph inorder to create an assistant for the users
            that would help them better understand the global events occuring in
            the world.The feature would help in improving the knowledge panel
            for the events by offering the relevant informtion users are
            intersted in at the right moment.
          </p>
          <h6>4. Civics Data Pipeline</h6>

          <p>
            The data pipeline ingest the data which first has been crawled using
            python and then is ingested into a structured political entity data
            including candidates,poltical parties,current office holders and
            other governmental positions
          </p>
          <h6>5. Client Interaction</h6>
          <p>
            Interaction with the stakeholders is a must in this kind of job
            where the project requirements of the clients are dynamic in nature.
            And demonstrating expertise in translating the clients need into
            easy to understand solutions is the need of the day which leads to
            the successful closing of various project with quality results.
          </p>
          <h6>6. Monitoring Job</h6>
          <p>
            My job also entails Monitoring the data pipleine which helps the
            team verify the quality and reliability of the data. Inorder to
            ensure that the pipeline is providing accurte and high quality data
            I have cretaed various dashboards and workflows through monitoring
            tools which helps the team keep track of the data pipelines
          </p>
        </div>
        {/* start const TextShpere = () =>{' '} */}
        {
          // Animation settings for Text Cloud
          useEffect(() => {
            return () => {
              const container = '.tagcloud'
              const texts = [
                'CNN',
                'KNN',
                'OpenCV',
                'Supervised Learning',
                'UnSupervised Learning',
                'Regression',
                'Python',
                'Tensorflow',
                'Keras',
                'Classification',
                'DecisionTrees',
                'Neural Networks',
                'SQL',
                'EDA',
                'Clustering',
                'Vectors',
                'Bayesian',
              ]

              const options = {
                radius: 220,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 90,
                keep: true,
              }

              TagCloud(container, texts, options)
            }
          }, [])
        }
        return (
        <>
          <div className="text-shpere">
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
          </div>
        </>
        ); //end
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
