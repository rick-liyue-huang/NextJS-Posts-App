import React from 'react';
import ReactMarkdown from "react-markdown";
import styles from './post-content.module.css'
import PostHeaderComponent from "./PostHeader";

const DUMMY_POST = {
	slug: 'first',
	title: 'getting starts',
	image: 'first.webp',
	content: '# This is a first post',
	date: '2022-02-10'
};

const PostContentComponent = (props) => {
	const {post} = props;
	const imagePath = `/images/posts/${post.slug}/${post.image}`



	return (
		<article className={styles.content}>
			<PostHeaderComponent title={post.title} image={imagePath} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContentComponent;
