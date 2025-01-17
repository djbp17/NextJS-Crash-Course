import ArticleList from '@/components/ArticleList';
import { server } from '../config';
import Head from 'next/head';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// The following line of codes below was used before we created our API
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
