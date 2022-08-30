import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailsOffres = ({offre}) => {
  const navigate = useNavigate();
    return (

        <div className="container">
        
        
        <h1 className="my-4">En Savoir Plus &nbsp;
          <small className="text-success">Sur Nos Offres</small>
        </h1>
        
        
        <div className="row">
        
          <div className="col-md-6">
            <img className="img-fluid" src={offre.images} alt="im22"/>
          </div>
        
          <div className="col-md-5">
            <h3 className="my-3">Titre de l'offre: {offre.titre}</h3>
            <p>{offre.description}</p>
            <h3 className="my-3">Details de l'Offre</h3>
            <ul>
              <li className="fw-bolder"><p>Date Lancement de l'Offre:{offre.date_Lancement}</p></li>
              <li className="fw-bolder"> <p>Date Clôture de l'Offre:{offre.fin_Depot}</p></li>
              <li className="fw-bolder"><p>Secteur Concerné:{offre.secteur_id}</p></li>
            </ul>
          </div>
        <div>
        <a className=" btn btn-primary fw-bolder text-light" onClick={() =>navigate('/soumission')}>Postuler</a>

        </div>
        </div>

        
        
        </div>
        
        
          )
}

export default DetailsOffres