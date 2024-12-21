import React from 'react'
import heroImage from '../../assets/hero/heroImage.png'
import styles from './Hero.module.css'

const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi, I'm Ulyana Pynkina</h1>
				<p className={styles.description}>
					I’m a frontend developer with extensive experience in creating
					adaptive and user-centric designs using React and Node.js. Reach out if
					you'd like to learn more!
				</p>
				<a
					href='mailto:ulanapynkina05.09@gmail.com'
					className={styles.contactBtn}
				>
					Contact Me
				</a>
			</div>
			<img
				src={heroImage }
				alt='hero-foto'
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	)
}

export default Hero
