import React from 'react'
import styles from './Contact.module.css'

import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import telegram from '../../assets/contact/telegram.png'

const Contact = () => {
	return (
		<footer id='contact' className={styles.container}>
			<div className={styles.title}>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
				<a
					href='../../../public/my_cv.pdf'
					download
					className={styles.downloadButton}
				>
					Download CV
				</a>
			</div>
			<ul className={styles.contacts}>
				<li className={styles.contact}>
					<img src={email} alt='Email' />
					<a href='mailto:ulanapynkina05.09@gmail.com'>
						ulanapynkina05.09@gmail.com
					</a>
				</li>
				<li className={styles.contact}>
					<img src={github} alt='GitHub' />
					<a
						href='https://www.github.com/ulalie'
						target='_blank'
						rel='noopener noreferrer'
					>
						github.com/ulalie
					</a>
				</li>
				<li className={styles.contact}>
					<img src={telegram} alt='Telegram' />
					<a
						href='https://t.me/ulalie'
						target='_blank'
						rel='noopener noreferrer'
					>
						t.me/ulalie
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Contact
