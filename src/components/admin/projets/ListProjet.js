import React, { useEffect, useState } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'
import { getAllProjets } from '../../../utils/requests'



const ListProjet = () => {
    const [projets,setProjets] = useState([])
    useEffect(()=>{
        (async()=>{
          const projets =  await getAllProjets();
            setProjets(projets)
        })()
      },[])
  return (
    <div className="col-10 text-center text-dark mb-4  mx-auto">
        <table className="table table-striped ">
  <thead className="bg-success">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom Projet</th>
      <th scope="col">Objet</th>
      <th scope="col">Contexte</th>
      <th scope="col">Description Général</th>
      <th scope="col">Durée Execution</th>
      <th scope="col">Zone Execution</th>
      <th scope="col">Responsable</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    { 
    
     projets.length > 0 && (projets.map((row,key)=>(
        <tr key={key}>
            <td>{row.id}</td>
            <td>{row.nom_Projet}</td>
            <td>{row.objet_Projet}</td>
            <td>{row.Contexte}</td>
            <td>{row.Description_General}</td>
            <td>{row.duree_Execution}</td>
            <td>{row.zone_Execution}</td>
            <td>{row.responsable_id}</td>
            <td>{row.action}
            <Link to={`/admin/detailprojet/${row.id}`} className="btn btn-primary mr-2">Detail</Link>
            
            
            </td>
        </tr>
    )))
    } 
  </tbody>
  
</table>

    </div>
  )
}

export default ListProjet