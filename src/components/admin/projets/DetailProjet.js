import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjetById } from '../../../utils/requests'


const DetailProjet = () => {
    const {id} = useParams();
    const [projets,setProjets] = useState([])
    useEffect(()=>{
        (async()=>{
          const projets =  await getProjetById(id);
            setProjets(projets)
        })()
      },[])
  return (
    <div className='container '>

<div className="row ">
  <div className="col-12">
    <div className="card">
      <div className="card-body bg-success">
        <h5 className="card-title">{projets.nom_Projet}</h5>
        </div>
        <ul className="list-group">
    <li className="list-group-item"><h6 className="fw-bold">Durée Execution:</h6>{projets.debut_Execution}</li>
    <li className="list-group-item"><h6 className="fw-bold">Fin Execution:</h6>{projets.fin_Execution}</li>
  
  <li className="list-group-item"><h6 className="fw-bold">Contexte:</h6>{projets.Contexte}</li>
  <li className="list-group-item"><h6 className="fw-bold">Innovation:</h6>{projets.Innovation}</li>
  <li className="list-group-item"><h6 className="fw-bold">Resume:</h6>{projets.Resume}</li>
  <li className="list-group-item"><h6 className="fw-bold">Objectif Spécifique:</h6>{projets.description_Objectif}</li>
  <li className="list-group-item"><h6 className="fw-bold">Offre Postulée:</h6>{projets.offre_id}</li>
  <li className="list-group-item"><h6 className="fw-bold">Activité:</h6>{projets.description_Activite}</li>
  <li className="list-group-item"><h6 className="fw-bold">Risque:</h6>{projets.risque_Identifier}</li>
  <li className="list-group-item"><h6 className="fw-bold">Résultat:</h6>{projets.description_Resultat}</li>
  </ul>
    </div>

  </div>
  </div>
  <div className="row  mt-4">
  <div className="col-6">
    <div className="card">
      <div className="card-body bg-success">
        <h5 className="card-title">Financement sollicitée</h5>
        </div>
        <ul className="list-group ">
    <li className="list-group-item"><h6 className="fw-bold">Subvention sollicitée:</h6>{projets.subvention_Sollicitee}</li>
    <li className="list-group-item"><h6 className="fw-bold">Somme Autre Soutien:</h6>{projets.somme_Autre_Soutien}</li>
    <li className="list-group-item"><h6 className="fw-bold">Apport Personnel:</h6>{projets.apport_Personnel}</li>
    <li className="list-group-item"><h6 className="fw-bold">Budget Total:</h6>{projets.total_Budget}</li>
    <li className="list-group-item"><h6 className="fw-bold">Autre Financement:</h6>{projets.autre_Financement_Fond}</li>
    <li className="list-group-item"><h6 className="fw-bold">Date Autre Financement:</h6>{projets.date_Autre_Financement}</li>
  </ul>
     
    </div>
  </div>

  <div className="col-6">
    <div className="card">
      <div className="card-body bg-success">
        <h5 className="card-title ">Etat Du Projet</h5>
        </div>
        <ul className="list-group d-inline ">
        <li className="list-group-item"><h6 className="fw-bold">Projet Etudié:</h6>{projets.projet_Etudier}</li>
        <li className="list-group-item"><h6 className="fw-bold">Date Projet Etudié:</h6>{projets.date_Etude}</li>
        <li className="list-group-item"><h6 className="fw-bold">Projet Evalué:</h6>{projets.projet_Evaluer}</li>
        <li className="list-group-item"><h6 className="fw-bold">Date Projet Evalué:</h6>{projets.date_Evaluation}</li>
        <li className="list-group-item"><h6 className="fw-bold">Statut du Projet:</h6>{projets.statut__projets}</li>
        </ul>
      
    </div>
  </div>

    </div>
   
    </div>
  )
}


export default DetailProjet;