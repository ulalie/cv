import React from 'react'
import skills from '../../date/skills.json'
import experience from '../../date/experience.json'
import styles from './Experience.module.css'

import js from '../../assets/skills/js.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import react from '../../assets/skills/react.png'
import node from '../../assets/skills/node.png'
import tailwind from '../../assets/skills/tailwind.png'
import figma from '../../assets/skills/figma.png'
import photoshop from '../../assets/skills/photoshop.png'
import canva from '../../assets/skills/canva.png'

const imageMap = {
	'skills/js.png': js,
	'skills/html.png': html,
	'skills/css.png': css,
	'skills/react.png': react,
	'skills/node.png': node,
	'skills/tailwind.png': tailwind,
	'skills/figma.png': figma,
	'skills/photoshop.png': photoshop,
	'skills/canva.png': canva,
}

const Experience = () => {
	return (
		<section className={styles.container} id='experience'>
			<h1 className={styles.title}>EXPERIENCE</h1>
			<div className={styles.content}>
				<div className={styles.skills}>
					{skills.map((skill, id) => {
						return (
							<div key={id} className={styles.skillsItem}>
								<div>
									<img
										src={
											imageMap[skill.imageSrc]
										}
										alt={skill.title}
									/>
								</div>
								<p>{skill.title}</p>
							</div>
						)
					})}
				</div>
				<div className={styles.experiences}>
					{experience.map((experienceItem, id) => {
						return (
							<div key={id} className={styles.experienceItem}>
								<h2>{`${experienceItem.organisation}`}</h2>
                                <p>{`${experienceItem.experiences}`}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Experience
