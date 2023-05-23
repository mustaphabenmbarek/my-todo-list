import React from 'react';

const Taskitem = (props) => {
    const{task, handleDeleteTask} = props;
    
    return (
        <div key={task.taskname} className='card'>
            <h5>Nom:</h5>
            <p>{task.taskname} </p>
            <h5>Catégorie:</h5>
            <p>{task.taskcategory} </p>
            <h5>Description:</h5>
            <p>{task.taskdescription} </p>
            <div className='footer'>
                <button className='btn-delete' onClick={() => handleDeleteTask(task.taskname)} >Supprimer</button>
            </div>
        </div>
    );
};

export default Taskitem;