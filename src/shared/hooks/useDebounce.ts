import { useEffect, useState } from 'react';

export const useDebounce = (value: string, time: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounceValue(value), time);
    return () => clearInterval(timerId);
  }, [value, time]);

  return debounceValue;
};
