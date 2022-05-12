
import HeroComponent from "../components/homepage/Hero";
import FeaturedPostsComponent from "../components/homepage/FeturedPosts";

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

export default function Home() {
  return (
    <>
     <HeroComponent />
     <FeaturedPostsComponent posts={DUMMY_POSTS} />
    </>
  )
}
