import type { TListPosts } from '@/interfaces';
import { ListPosts } from '@/components/ListPosts';
//import styles from './style.module.css';

interface Props {
  data: TListPosts | null;
}

const Main = ({ data }: Props) => {
  return <div>{data ? <ListPosts data={data} /> : null}</div>;
};

export default Main;
