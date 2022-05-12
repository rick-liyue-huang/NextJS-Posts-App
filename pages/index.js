
import HeroComponent from "../components/homepage/Hero";
import FeaturedPostsComponent from "../components/homepage/FeturedPosts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";


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

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Post Home</title>
        <meta name={'description'} content={'i post something'}  />
      </Head>
     <HeroComponent />
     <FeaturedPostsComponent posts={props.posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    // revalidate: 3000
  }
}
