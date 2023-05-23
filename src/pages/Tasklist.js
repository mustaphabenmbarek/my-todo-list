import React from 'react';
import Taskitem from '../components/Taskitem';

const Tasklist = (props) => {
    const{tasks, handleDeleteTask} = props;
    return (
        <div className='tasklist'>
            <h2>Liste des tâches:</h2>
            <div>
                {
                    tasks.map((task) => (
                        <Taskitem task={task} key={task.taskname} handleDeleteTask={handleDeleteTask} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasklist;