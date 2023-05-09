import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Taskadd from './pages/Taskadd';
import Tasklist from './pages/Tasklist';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Taskadd />} />
        <Route path='/list' element={<Tasklist />} />
      </Routes>
    </>
  );
}

export default App;
