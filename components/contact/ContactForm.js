import React from 'react';
import styles from './contact-form.module.css';

const ContactFormComponent = () => {
	return (
		<section className={styles.contact}>
			<h1>What will you need?</h1>
			<form className={styles.form}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id={'email'} required />
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id={'name'} required />
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Leave your Message</label>
					<textarea id="message" rows="6"></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Your Message</button>
				</div>
			</form>
		</section>
	);
};

export default ContactFormComponent;
