import React from 'react';
import PostItemComponent from "./PostItem";
import styles from './post-grid.module.css';

const PostGridComponent = (props) => {

	const {posts} = props

	return (
		<ul className={styles.grid}>
			{
				posts.map(post => <PostItemComponent post={post} key={post.slug} />)
			}
		</ul>
	);
};

export default PostGridComponent;
