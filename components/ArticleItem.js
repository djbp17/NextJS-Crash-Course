import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link
      className={articleStyles.card}
      href="/article/[id]"
      as={`/article/${article.id}`}
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
};

export default ArticleItem;
