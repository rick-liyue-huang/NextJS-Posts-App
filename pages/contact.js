import React from 'react';
import ContactFormComponent from "../components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name={'description'} content={'contact us'} />
			</Head>
			<ContactFormComponent />
		</>
	)
};

export default ContactPage;
