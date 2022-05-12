import React from 'react';
import styles from './all-posts.module.css';
import PostGridComponent from "./PostGrid";


const AllPostComponent = (props) => {

	const {posts} = props;
	return (
		<section className={styles.posts}>
			<h1>All Posts</h1>
			<PostGridComponent posts={posts} />
		</section>
	);
};

export default AllPostComponent;
