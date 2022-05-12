import React, {useEffect, useState} from 'react';
import NotificationComponent from '../ui/notification';
import styles from './contact-form.module.css';

async function sendContactData(contactDetail) {
	// TODO: add client-end input validation
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetail),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'something wrong')
	}

	return data;

}

const ContactFormComponent = () => {

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState('');
	const [requestError, setRequestError] = useState('');

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null)
			}, 3000)
			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	const sendMessageHandler = async (e) => {
		e.preventDefault();

		setRequestStatus('pending');

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage
			});
			setRequestStatus('success')
			setEnteredMessage('')
			setEnteredName('')
			setEnteredEmail('')
		} catch (err) {
			setRequestError(error.message)
			setRequestStatus('error');
		}
	}

	let notification;
	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'sending message...',
			message: 'your message is on way'
		}
	}
	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'successfully sent',
			message: 'successfully '
		}
	}

	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'sending message error',
			message: requestError,
		}
	}
	return (
		<section className={styles.contact}>
			<h1>What will you need?</h1>
			<form className={styles.form} onSubmit={sendMessageHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email" id={'email'} required
							 value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text" id={'name'} required
							value={enteredName} onChange={e => setEnteredName(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Leave your Message</label>
					<textarea
						id="message" rows="6" required
						value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button type={"submit"}>Send Your Message</button>
				</div>
			</form>
			{
				notification &&
				<NotificationComponent
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			}
		</section>
	);
};

export default ContactFormComponent;
