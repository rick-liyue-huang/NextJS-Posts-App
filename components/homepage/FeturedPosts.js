import React from 'react';
import styles from './featured-post.module.css';
import PostGridComponent from "../posts/PostGrid";

const FeaturedPostsComponent = (props) => {



	return (
		<section className={styles.latest}>
			<h2>Featured Posts</h2>
			<PostGridComponent posts={props.posts} />
		</section>
	);
};

export default FeaturedPostsComponent;
