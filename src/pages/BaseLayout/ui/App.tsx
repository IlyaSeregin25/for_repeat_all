import { Footer } from '../../../components/Footer';
//import { Main } from './components/Main';
import { Header } from '../../../components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
        {/* <Main /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
