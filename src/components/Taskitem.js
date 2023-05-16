import React from 'react';

const Taskitem = (props) => {
    const{task, handleDeleteTask} = props;
    
    return (
        <div key={task.taskname} className='card'>
            <h3>Nom</h3>
            <p>{task.taskname} </p>
            <h3>Catégorie</h3>
            <p>{task.taskcategory} </p>
            <h3>Description</h3>
            <p>{task.taskdescription} </p>
            <div className='footer'>
                <button className='btn-delete' onClick={() => handleDeleteTask(task.taskname)} >Supprimer</button>
            </div>
        </div>
    );
};

export default Taskitem;