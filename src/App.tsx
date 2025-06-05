import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { useEffect } from 'react';
import { useAppDispatch } from './store/store';
import { getPosts } from './store/slices/postsSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch(getPosts(json));
      });
  }, []);

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main className="container">
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
