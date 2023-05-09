import React from 'react';

const Taskadd = () => {
    return (
        <div className='taskadd'>
            <h1>Ajout une tâche</h1>
            <div>
                <form action="">
                    <label htmlFor="tachename">Nom</label>
                    <br />
                    <input type="text" name='tachename' id='tachename' />
                    <br />
                    <label htmlFor="tachecategory">Catégorie</label>
                    <br />
                    <select name="tachecategory" id="tachecategory">
                        <option value="">Selectionner la tâche</option>
                        <option value="journalier">tâches journalières</option>
                        <option value="hebdomadaire">tâches hebdomadaires</option>
                        <option value="mensuelle">tâches mensuelles</option>
                        <option value="annuelle">tâches annuelles</option>
                        <option value="ponctuelle">tâches ponctuelles</option>
                    </select>
                    <br />
                    <label htmlFor="tachedescription">Description</label>
                    <br />
                    <textarea name="tachedescription" id="tachedescription" cols="30" rows="10"></textarea>
                    <br />
                    <input type="submit" value='Ajouter tâche' />
                </form>
            </div>
        </div>
    );
};

export default Taskadd;