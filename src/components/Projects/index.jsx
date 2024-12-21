import React from 'react'
import projects from '../../date/projects.json'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'


const Projects = () => {
	return (
		<section className={styles.container} id='projects'>
			<h1 className={styles.title}>PROJECTS</h1>
			<div className={styles.projects}>
				{projects.map((project, id) => {
					return (
						<ProjectCard key={id} project={project}/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
