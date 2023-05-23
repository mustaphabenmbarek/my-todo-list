import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Taskadd from './pages/Taskadd';
import Tasklist from './pages/Tasklist';
import { useState } from 'react';
import logo from './assets/images/logo.png';

function App() {
  // tableau d'objets vide par défaut
  const [tasks, setTasks] = useState([]);

  // Comportement : fonctions
  const handleTaskAdd = (task) => {
    console.log('handleTaskAdd', task);
    setTasks([...tasks, task]);
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.taskname !== id));
  }

  return (
    <>
      <header className='header-app' >
        <div className='container'>
          <img src={logo} width={40} alt="logo" />
          <h6>GdT</h6>
          <Menu />
        </div>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Taskadd handleTaskAdd={handleTaskAdd} />} />
          <Route path='/list' element={<Tasklist tasks={tasks} handleDeleteTask={handleDeleteTask} />} />
        </Routes>
      </div>
      <footer className='footer-app'>
        <div className='container'>
          <p>&copy; - Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
