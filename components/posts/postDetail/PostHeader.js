import React from 'react';
import styles from './post-header.module.css';
import Image from "next/image";

const PostHeaderComponent = (props) => {

	const {title, image} = props;
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
			<Image src={image} width={200} height={150} alt={title} />
		</header>
	);
};

export default PostHeaderComponent;
