import { Post } from '@/components/Post';
import styles from './style.module.css';
//import { useAppSelector } from '@/store/store';
import { useGetPostsFromRTKQuery } from '@/store/services/postsApi';

const ListPosts = () => {
  //const posts = useAppSelector(state => state.posts.posts);
  const { data, error, isLoading } = useGetPostsFromRTKQuery(null);

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
