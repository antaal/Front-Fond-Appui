import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllOffres } from '../../../utils/requests'

const ListOffres = () => {
    const [offres,setOffres] = useState([])
    useEffect(()=>{
        (async()=>{
          const offres =  await getAllOffres();
            setOffres(offres)
        })()
      },[])
  return (
    <div className="col-10 text-center text-dark mb-4  mx-auto">
        <table className="table table-striped ">
  <thead className="bg-success">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Images</th>
      <th scope="col">Description</th>
      <th scope="col">Date Lancement</th>
      <th scope="col">Fin Depot</th>
      <th scope="col">Secteur Concerne</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { 
    
    offres.length > 0 && (offres.map((row,key)=>(
        <tr key={key}>
            <td>{row.id}</td>
            <td>{row.titre}</td>
            <td>{row.images}</td>
            <td>{row.description}</td>
            <td>{row.date_Lancement}</td>
            <td>{row.fin_Depot}</td>
            <td>{row.secteur_id}</td>
           <td>
           <Link to={`/admin/editOffre/${row.id}`} className="btn btn-sm btn-info mr-2">Modifier</Link>
            
           </td>
        </tr>
    )))
    }
  </tbody>
</table>
    </div>
  )
}

export default ListOffres