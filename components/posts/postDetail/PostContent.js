import React from 'react';
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from './post-content.module.css'
import PostHeaderComponent from "./PostHeader";
import Image from "next/image";

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

	const customRenderers = {
		// img(image) {
		// 	return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
		// },
		p(paragraph) {
			const {node} = paragraph;
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (<div className={styles.image}>
					<Image src={`/images/posts/${post.slug}/${image.properties.src}`} alt={image.alt} width={600} height={300} />
				</div>)
			}
			return <p>{paragraph.children}</p>
		},

		code(code) {
			const {className, children} = code;
			const match = /language-(\w+)/.exec(className || '')
			return <SyntaxHighlighter language={match[1]} style={atomDark} >{children}</SyntaxHighlighter>
		}

	};

	return (
		<article className={styles.content}>
			<PostHeaderComponent title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers} >{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContentComponent;
