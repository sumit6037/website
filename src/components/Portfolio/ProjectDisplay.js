import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../.././helpers/ProjectList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="img" />
      <div style={{ display: 'flex', listStyle: 'none', width: 'auto' }}>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.links[0]}
          style={{ marginInline: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.links[1]}
          style={{ marginInline: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faGooglePlay} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.links[2]}
          style={{ marginInline: '1.5rem' }}
        ></a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.links[3]}
          style={{ marginInline: '1.5rem' }}
        ></a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.links[4]}
          style={{ marginInline: '1.5rem' }}
        ></a>
      </div>
    </div>
  )
}

// New CODE..

//function ProjectDisplay() {
//    const { id } = useParams();
//    const project = ProjectList[id]
//    return (
//        <div className="project">
//            <h1> {project.name} </h1>
//            <img src={project.image} />
//            <div className="pro-btns">
//                <NavLink to="url.com" className="btn">View</NavLink>
//                <NavLink to="url.com" className="btn">Source</NavLink>
//            </div>
//        </div>
//    );
//}

export default ProjectDisplay
