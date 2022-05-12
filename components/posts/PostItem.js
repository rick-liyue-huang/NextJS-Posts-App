import React from 'react';
import Link from 'next/link'
import Image from "next/image";
import styles from './post-item.module.css';

const PostItemComponent = (props) => {

	const {title, expert, image, date, slug} = props.post;
	const formattedDate = new Date(date).toLocaleDateString('en-AU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const imagePath = `/images/posts/${slug}/${image}`
	const linkPath = `/posts/${slug}`

	return (
		<li className={styles.post}>
			<Link href={''}><a>
				<div className={styles.image}>
					<Image
						src={imagePath} alt={title} width={300} height={200}
						layout={"responsive"}
					/>
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{expert}</p>
				</div>
			</a></Link>
		</li>
	);
};

export default PostItemComponent;
