import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Taskadd from './pages/Taskadd';
import Tasklist from './pages/Tasklist';
import { useState } from 'react';
import logo from './assets/images/logo.png';

function App() {
  // useState represente un getter 'task' et setter 'setTask'
  // tableau d'objets vide par défaut
  const[tasks, setTasks] = useState([]);
  
  //tasks
  // //[
  //     {
  //       nom: 'controle',
  //       categorie: 'tâches journalieres',
  //       description: 'faire le controle generale des comptes'
  //     },
  //    {
  //       nom: 'imprimer',
  //       categorie: 'tâches mensuelles',
  //       description: 'imprimer les comptes '
  //     },
  //   ]

  // Comportement : fonction
  const handleTaskAdd = (task) => {
    console.log('handleTaskAdd', task);
    setTasks([...tasks, task]);
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.taskname !==id));
  }

  return (
    <>
      <div>
        <header className='app-header'> 
          <img src={logo} className='app-logo' alt="logo" />
        </header>
      </div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Taskadd handleTaskAdd={handleTaskAdd} />} />
        <Route path='/list' element={<Tasklist tasks={tasks} handleDeleteTask={handleDeleteTask} />} />
      </Routes>
    </>
  );
}

export default App;
