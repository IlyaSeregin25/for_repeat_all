import { useState } from 'react';
import styles from './style.module.css';
import { useAppDispatch } from '@/store/store';
import { getFilter } from '@/store/slices/postsSlice';
import { useDebounce } from '@/shared/hooks/useDebounce';

const FilterForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();
  dispatch(getFilter(useDebounce(value, 300)));

  return (
    <div className={styles.filterform}>
      <input type="text" value={value} onChange={ev => setValue(ev.target.value)} />
    </div>
  );
};

export default FilterForm;
