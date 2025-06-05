import styles from './style.module.css';
import { useGetPostFromRTKByIdQuery } from '@/store/services/postsApi';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostPage = () => {
  const { postId = 0 } = useParams();
  const navigate = useNavigate();

  const { data /* error, isLoading */ } = useGetPostFromRTKByIdQuery(postId);
  return (
    <div className={styles.page}>
      This is Post page {postId}
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
      <Link to={'/'}>Home page</Link>
      <button onClick={() => navigate(-1)}>Back -1</button>
    </div>
  );
};

export default PostPage;
