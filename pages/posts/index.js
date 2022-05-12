import React from 'react';
import AllPostComponent from "../../components/posts/AllPost";
import {getAllPosts} from "../../lib/posts-util";

const DUMMY_POSTS = [
	{
		slug: 'first',
		title: 'getting starts',
		image: 'first.webp',
		expert: 'first content',
		date: '2022-02-10'
	},
	{
		slug: 'second',
		title: 'getting starts1',
		image: 'second.webp',
		expert: 'first content1',
		date: '2022-02-98'
	},
	{
		slug: 'third',
		title: 'getting starts 2',
		image: 'third.webp',
		expert: 'first content2',
		date: '2022-02-9'
	},
	{
		slug: 'fourth',
		title: 'getting starts3',
		image: 'fourth.webp',
		expert: 'first content3',
		date: '2022-02-11'
	}
]

const AllPostsPage = (props) => {
	return (
		<AllPostComponent posts={props.posts} />
	);
};

export async function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts
		}
	}
}

export default AllPostsPage;
