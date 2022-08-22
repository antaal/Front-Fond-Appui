import React, {useState} from 'react'
import {postSecteur} from '../utils/requests'

const Secteur = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit ')
        const data = new FormData(e.target)
        postSecteur(Object.fromEntries(data.entries())).then(response =>console.log(response))  
      }
    

  return (
    <div className="App mb-4  mx-auto text-center H-50">
        <h1>Secteur</h1>
        <form onSubmit ={handleSubmit}>
            <input 
                type="text"
                className='form-control'
                name='nom_Secteur'
                
                placeholder='Nom du secteur'
            />
            <button type='submit' className='btn btn-primary'>Ajouter</button>
        </form>


    </div>
  );
};



export default Secteur