import React from 'react'
import {PROJECTS} from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' >
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            {PROJECTS.map((project,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <img src={project.image} alt={project.title}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects