import type { TListPosts } from '@/interfaces';
import { Post } from '@/components/Post';
import styles from './style.module.css';

interface Props {
  data: TListPosts;
}

const ListPosts = ({ data }: Props) => {
  return (
    <ul className={styles.list}>
      {data.map(post => {
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
