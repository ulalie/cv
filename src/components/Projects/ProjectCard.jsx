import React from 'react'
import todo from '../../assets/projects/todo.png'
import lamoda from '../../assets/projects/lamoda.png'
import spa from '../../assets/projects/spa.png'
import landing from '../../assets/projects/landing.png'
import notion from '../../assets/projects/notion.png'
import styles from './ProjectCard.module.css'

const imageMap = {
	'projects/todo.png': todo,
	'projects/lamoda.png': lamoda,
	'projects/spa.png': spa,
	'projects/notion.png':notion,
	'projects/landing.png': landing,
}


const ProjectCard = ({
	project: { title, imageSrc, description, skills, demo, source },
}) => {
	return (
		<div className={styles.container}>
			<img src={imageMap[imageSrc]} alt={title} />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
			<ul className={styles.skills}>
				{skills.map((skill, id) => {
					return(
					<li key={id} className={styles.skill}>
						{skill}
					</li>)
				})}
			</ul>
			<div className={styles.buttons}>
				<a href={source} className={styles.button}>
					Source
				</a>
			</div>
		</div>
	)
}

export default ProjectCard
