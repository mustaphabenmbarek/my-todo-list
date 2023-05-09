import './styles/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Taskadd from './pages/Taskadd';
import Tasklist from './pages/Tasklist';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Taskadd />
      <Tasklist />
    </div>
  );
}

export default App;
