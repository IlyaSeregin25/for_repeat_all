import { Post } from '@/components/Post';
import styles from './style.module.css';
import { useAppSelector } from '@/store/store';

const ListPosts = () => {
  const posts = useAppSelector(state => state.posts.posts);
  console.log(posts);

  return (
    <ul className={styles.list}>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListPosts;
