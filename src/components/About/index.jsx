import React from 'react'
import styles from './About.module.css'
import aboutImage from '../../assets/about/aboutImage.png'
import cursorIcon from '../../assets/about/cursorIcon.png'

const About = () => {
	return (
		<section className={styles.about} id='about'>
			<h1 className={styles.title}>ABOUT</h1>
			<div className={styles.container}>
				<img
					src={aboutImage}
					alt='hero-about'
					className={styles.heroImg}
				></img>
				<div className={styles.textBlock}>
					<div className={styles.aboutItem}>
						<img
							src={cursorIcon}
							alt='cursor'
							className={styles.cursorImg}
						/>

						<div className={styles.textBlockFirst}>
							<h1>Me</h1>
							<p>
								I am passionate about web development and constantly seek
								creative solutions to complex problems. My goal is to design
								intuitive and user-friendly interfaces, and I am actively
								enhancing my skills in this field.
							</p>
						</div>
					</div>

					<div className={styles.aboutItem}>
						<img
							src={cursorIcon}
							alt='cursor'
							className={styles.cursorImg}
						/>
						<div className={styles.textBlockSecond}>
							<h1>Education</h1>
							<p>Mechanics and Mathematics faculty </p>
							<p>BSU 2023 - now</p>
						</div>
					</div>

					<div className={styles.aboutItem}>
						<img
							src={cursorIcon}
							alt='cursor'
							className={styles.cursorImg}
						/>
						<div className={styles.textBlockThird}>
							<h1>Languages</h1>
							<p>English - B1</p>
							<p>Russian - Native</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
