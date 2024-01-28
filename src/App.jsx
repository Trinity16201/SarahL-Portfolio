import { Outlet } from 'react-router-dom';
import Nav from '/components/Nav';
import './index.css';
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;