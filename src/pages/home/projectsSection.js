import React from 'react'
import projects from '../../data/projects'
import ProjectCard from '../../components/projectCard'
import "./projectSection.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ProjectsSection = () => {
  return (
    <section className='projects-section'>
        <h2>Our projects</h2>
        <div className='projects-grid'>
            {projects.map((project,index)=>(
                <ProjectCard key={index} project={project}></ProjectCard>
            ))}
        </div>
    </section>
  )
}

export default ProjectsSection