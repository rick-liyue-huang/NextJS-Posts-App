// convert the string to object in md
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostData = (fileName) => {
	const postSlug = fileName.replace(/\.md$/, '');  // remove the file ext
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const {data, content} = matter(fileContent);

	return {
		slug: postSlug,
		...data,
		content: content
	}
}

export const getAllPosts = () => {
	const postFiles = getPostsFiles();

	const allPosts = postFiles.map(postFile => {
		return getPostData(postFile);
	});

	return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
}

export const getPostsFiles = () => {
	return fs.readdirSync(postsDirectory);
}

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();
	return allPosts.filter(post => post.isFeatured);
}
