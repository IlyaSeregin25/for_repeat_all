import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import type { TListPosts } from './interfaces';

const App = () => {
  const [data, setData] = useState<null | TListPosts>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main className="container">
        <Main data={data} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
