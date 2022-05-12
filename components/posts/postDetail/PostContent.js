import React from 'react';
import styles from './post-content.module.css'
import PostHeaderComponent from "./PostHeader";

const DUMMY_POST = {
	slug: 'first',
	title: 'getting starts',
	image: 'first.webp',
	content: '# This is a first post',
	date: '2022-02-10'
};

const PostContentComponent = () => {

	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

	return (
		<article className={styles.content}>
			<PostHeaderComponent title={DUMMY_POST.title} image={imagePath} />
			{DUMMY_POST.content}
		</article>
	);
};

export default PostContentComponent;
