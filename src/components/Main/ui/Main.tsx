import { FilterForm } from '@/components/FilterForm';
import { ListPosts } from '@/components/ListPosts';
import type { TListPosts } from '@/interfaces';
import { useGetPostsFromRTKQuery } from '@/store/services/postsApi';
import { useAppSelector } from '@/store/store';
//import styles from './style.module.css';

const Main = () => {
  const { data /* error, isLoading */ } = useGetPostsFromRTKQuery(null);
  const posts = useAppSelector(state => state.posts.posts);

  function sorted(arr: TListPosts, keyword: string): TListPosts | undefined {
    return arr.filter(post => {
      if (post.title.includes(keyword) || post.body.includes(keyword)) return post;
    });
  }
  const word = useAppSelector(state => state.posts.filter);
  const filteredData = sorted(posts, word);

  return (
    <div>
      <FilterForm />
      <ListPosts data={filteredData} />
    </div>
  );
};

export default Main;
