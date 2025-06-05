import { Post } from '@/components/Post';
import styles from './style.module.css';
import { useGetPostsFromRTKQuery } from '@/store/services/postsApi';

const ListPosts = () => {
  const { data /* error, isLoading */ } = useGetPostsFromRTKQuery(null);

  return (
    <ul className={styles.list}>
      {data?.map(post => {
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
