import React, {useState, useEffect} from 'react'
import { postOffre,getAllSecteurs } from '../../../utils/requests';



const FormOffre = () => {
    const [secteurs, setSecteurs] = useState({data: []});
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit ')
        const data = new FormData(e.target)
        postOffre(Object.fromEntries(data.entries())).then(response =>console.log(response))  
      }
    
      useEffect(()=>{
        (async()=>{
          const secteurs =  await getAllSecteurs();
            setSecteurs(secteurs)
        })()
      },[])
  return (
  
    
    
      <div className=" col-6 text-center text-dark mb-4  mx-auto ">
     
        <h1>Offres</h1>
        <form onSubmit ={handleSubmit}>
            <label >Titre de l'Offre</label>
            <input 
                type="text"
                className='form-control'
                name='titre'
            />
            <label >Image de l'Offre</label>
            <input 
                type="text"
                className='form-control'
                name='images'
            />
            <label >Description de l'Offre</label>
            <input 
                type="text"
                className='form-control'
                name='description'
            />
            <label >Date Lancement de l'Offre</label>
            <input 
                type="dateTime"
                className='form-control'
                name='date_Lancement'
            />
            <label >Fin de l'Offre</label>
            <input 
                type="dateTime"
                className='form-control'
                name='fin_Depot'
            />
            <div>
    <label for="secteur_id" className="form-label">Secteurs</label>
    <select id="secteur_id" className="form-select" name="secteur_id" defaultValue>
      <option >Choisir votre Secteurs</option>
      {secteurs.length > 0 && secteurs.map(s => <option value={s.id} key={s.id}>{s.nom_Secteur}</option>)}

    </select>
  </div>
            {/* <label >Admin de l'Offre</label>
            <input 
                type="text"
                className='form-control'
                name='titre'
            />
            <Secteur /> */}
            <button type='submit' className='btn btn-primary'>Ajouter</button>
        </form>


    </div>
    
  );
};



export default FormOffre