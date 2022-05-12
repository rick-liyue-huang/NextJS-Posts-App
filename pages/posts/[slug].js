import React from 'react';
import PostContentComponent from "../../components/posts/postDetail/PostContent";
import {getPostData, getPostsFiles} from "../../lib/posts-util";
import Head from "next/head";

const PostDetailPage = (props) => {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name={'description'} content={props.post.expert} />
			</Head>
			<PostContentComponent post={props.post} />
		</>
	)
};

export async function getStaticProps(context) {
	const {params} = context;
	const {slug} = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData
		},
		revalidate: 600
	}
}
export async function getStaticPaths() {

	const postFilesNames = getPostsFiles();
	const slugs = postFilesNames.map(fileName => fileName.replace(/\.md$/, ''))

	return {
		paths: slugs.map(slug => ({params: {slug: slug}})),
		fallback: false // 'blocking'
	}
}

export default PostDetailPage;
