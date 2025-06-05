import type { IPost } from '@/interfaces';
import styles from './style.module.css';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return (
    <article className={styles.post}>
      <header>
        <h3 className={styles.title}>{post.title}</h3>
      </header>
      <section className={styles.info}>
        <p>{post.body}</p>
      </section>
    </article>
  );
};

export default Post;
