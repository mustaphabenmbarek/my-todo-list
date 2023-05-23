import React, { useState } from 'react';

const Taskadd = (props) => {
    //etat initial : un objet vide
    const[task, setTask] = useState({
        taskname: '',
        taskcategory: '',
        taskdescription: ''
    });
    const{handleTaskAdd} = props;

    // // exemple task pour tester sur une donnée
    // const task = {
    //     nom : 'controle',
    //     categorie : 'tâches journalières',
    //     description :'faire le controle generale des comptes'
    // };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleTaskAdd(task);
        setTask({
            taskname: '',
            taskcategory: '',
            taskdescription: ''
        });
    }

    const handleChange = (evt) => {
        const { name, value} = evt.target;
        // faire une copie de task
        setTask({...task, [name]: value});
    }

    return (
        <div className='taskadd'>
            {/* <h1>Ajout une tâche</h1> */}
            <div className='taskform'>
                <form  onSubmit={(evt) => handleSubmit(evt)} >
                    <label htmlFor="taskname">Nom:</label>
                    <br />
                    <input 
                        type="text" 
                        name='taskname' 
                        placeholder='Ajoutez une tâche' 
                        id='taskname' 
                        className='taskinput'
                        value={task.taskname} 
                        onChange={(evt) => handleChange(evt)} 
                    />
                    <br />
                    <label htmlFor="taskcategory">Catégorie:</label>
                    <br />
                    <select name="taskcategory" id="taskcategory" value={task.taskcategory} onChange={(evt) => handleChange(evt)}>
                        <option value="">Selectionnez une période</option>
                        <option value="journalier">tâches journalières</option>
                        <option value="hebdomadaire">tâches hebdomadaires</option>
                        <option value="mensuelle">tâches mensuelles</option>
                        <option value="annuelle">tâches annuelles</option>
                        <option value="ponctuelle">tâches ponctuelles</option>
                    </select>
                    <br />
                    <label htmlFor="taskdescription">Description:</label>
                    <br />
                    <textarea 
                        name="taskdescription" 
                        id="taskdescription"
                        placeholder='Entrez description ...'
                        cols="30" 
                        rows="10"
                        value={task.taskdescription} 
                        onChange={(evt) => handleChange(evt)}
                        ></textarea>
                    <br />
                    <div className='taskbtn'>
                        <button type='submit'>
                            <span>Ajouter une tâche</span>
                        </button>
                    {/* <input type="submit" value='Ajouter tâche' className='btn' /> */}
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Taskadd;