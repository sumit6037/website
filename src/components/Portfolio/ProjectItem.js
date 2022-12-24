import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate()
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate('/project/' + id)
      }}
    >
      <div className="imgContainer">
        <img src={image} className="bgImage" alt="img" />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem
