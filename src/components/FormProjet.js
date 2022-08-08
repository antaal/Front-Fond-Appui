import React from 'react'
import Footer from './Footer'
import Header from './Header'

const FormProjet = () => {
  return (
    <>
    <Header />
   
      <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
       <h1>INFORMATIONS SUR LE PROJET OU L’INITIATIVE</h1>
      </div>
   
   <div className='col-md-8 mx-auto'>
       <form className="row col-lg-12">
       <div className="col-12 mb-4">
   <label for="inputAddress2" className="form-label">Nom du Projet</label>
   <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
 </div>
 <div className="col-md-6">
   <label for="inputEmail4" className="form-label">Durée d’éxécution du projet</label>
   <input type="email" className="form-control" id="inputEmail4"/>
 </div>
 <div className="col-md-6">
   <label for="inputState" className="form-label">Domaine d’Expression  Artistique</label>
   <select id="inputState" className="form-select">
     <option selected>Choose...</option>
     <option>...</option>
   </select>
 </div>
 <div className="col-md-6 mb-4">
   <label for="inputPassword4" className="form-label">Début d’éxécution *</label>
   <input type="password" className="form-control" id="inputPassword4"/>
 </div>

  <div className="col-md-6 mb-4">
   <label for="inputEmail4" className="form-label">Fin d’éxécution</label>
   <input type="email" className="form-control" id="inputEmail4"/>
 </div>
 <div className="col-md-6">
   <label for="inputState" className="form-label">Zone d’éxécution  </label>
   <select id="inputState" className="form-select">
     <option selected>Choose...</option>
     <option>...</option>
   </select>
 </div>
 <div className="col-md-6">
   <label for="inputState" className="form-label">Autre Financement du Fonds d’Appui</label>
   <select id="inputState" className="form-select">
     <option selected>Choose...</option>
     <option>...</option>
   </select>
 </div>
 <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
       <h1>Montants Budget du Projet </h1>
      </div>
 <div className="col-md-6 ">
   <label for="inputPassword4" className="form-label">Subvention sollicitée du Fonds</label>
   <input type="password" className="form-control" id="inputPassword4"/>
 </div>

 <div className="col-md-6 mb-4">
   <label for="inputAddress" className="form-label">Somme des autres soutiens</label>
   <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
 </div>
 <div className="col-md-6">
   <label for="inputCity" className="form-label">Apport personnel</label>
   <input type="text" className="form-control" id="inputCity"/>
 </div>
 <div className="col-md-6 mb-4">
   <label for="inputCity" className="form-label">Total Budget Prévisionnel</label>
   <input type="text" className="form-control" id="inputCity"/>
 </div>
 <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
       <h1>Montants Budget du Projet </h1>
      </div>
      <div className="col-12 mb-4">
   <label for="inputAddress2" className="form-label">Titre du Projet (objet de la demande de subvention).</label>
   <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
 </div>
 <div class="form-group">
    <label for="exampleFormControlTextarea1">Contexte et Justification du projet</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='En cinq lignes au maximum dire le contextuel global qui justifie le projet..'></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Innovation et pertinence du projet </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='-Quelle est l’innovation majeure et la pertinence du projet ?'></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Résumé du projet</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='-Faire un résumé concis du projet maximum sur une demi page'></textarea>
  </div>

  <div className="mb-4">
    <h5>Objectif général, objectifs spécifiques du projet</h5>
    <p>Décrire un (01) Objectif Général et trois objectifs spécifiques du projet dans le tableau ci-dessous</p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Objectifs</th>
      
      <th scope="col" className="bg-dark text-light">Descriptifs des objectifs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS1  (Objectif Spécifique 1) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS2  (Objectif Spécifique 2) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS3  (Objectif Spécifique 3) </th>
      <td>.......</td>
    </tr>

   
  </tbody>
</table>
</div>

<div className="mb-4">
    <h5>Activités prévues du projet</h5>
    <p>Quelles sont les trois (03) principales activités du projet ?</p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Objectifs</th>
      
      <th scope="col" className="bg-dark text-light">Descriptifs des objectifs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS1  (Objectif Spécifique 1) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS2  (Objectif Spécifique 2) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS3  (Objectif Spécifique 3) </th>
      <td>.......</td>
    </tr>

   
  </tbody>
</table>
</div>

<div className="mb-4">
    <h5>Résultats escomptés du projet</h5>
    <p>Donner les résultats escomptés </p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Objectifs</th>
      
      <th scope="col" className="bg-dark text-light">Descriptifs des objectifs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS1  (Objectif Spécifique 1) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS2  (Objectif Spécifique 2) </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">OS3  (Objectif Spécifique 3) </th>
      <td>.......</td>
    </tr>

   
  </tbody>
</table>
</div>

<div className="col-12 mb-4">
<h5>Indicateurs de performance du projet</h5>
   <label for="inputAddress2" className="form-label">Donner les résultats escomptés</label>
   <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
 </div>
 <div className='col-md-8 mx-auto mt-4'>
    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Bénéficiaires</th>
      <th scope="col">Profils des bénéficiaires</th>
      <th scope="col">Nombres </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col ">Les bénéficiaires Directs</th>
   
      <td >Mark</td>
      <td>@mdo</td>
    </tr>
  
    <tr>
      <th scope="row">Les bénéficiaires indirects</th>
      <td>Jacob</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</table>
        
    </div>

 <div className="mb-4">
    <h5>Risques</h5>
    <p>-Quels sont les risques, contraintes et obstacles identifiés ?</p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Risques identifiés</th>
      
      <th scope="col" className="bg-dark text-light">Risques identifiés</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Risque 1  ( lié à l’Activité 1)  </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Risque 2  ( lié à l’Activité 2)   </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Risque 3  ( lié à l’Activité 3) </th>
      <td>.......</td>
    </tr>

   
  </tbody>
</table>
</div>
<div className="mb-4">
    <h5>stratégie d’atténuation</h5>
    <p>-Quelles est  la stratégie mise en œuvre pour les surmonter ?</p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Stratégie d’intervention face aux risques</th>
      
      <th scope="col" className="bg-dark text-light">Descriptifs de la stratégie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Stratégie 1  (face au risque 1)  </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Stratégie 2  (face au risque 2)     </th>
      <td>.......</td>
    </tr>
    <tr>
      <th scope="row">Stratégie 3  (face au risque 3) </th>
      <td>.......</td>
    </tr>

   
  </tbody>
</table>
</div>

<div className="mb-4">
    <h5>PLANNING ET INDICATEURS</h5>
    <p>-Présenter le calendrier prévisionnel du projet en se référant au tableau indicatif ci-après.</p>

    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Dates / Périodes</th>
      <th scope="col" className="bg-dark text-light">Activités</th>
      <th scope="col" className="bg-dark text-light">Intervenants / Acteurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col ">.......</th>
   
      <td >...</td>
      <td>...</td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
   
  </tbody>
</table>
</div>

<div className="mb-4">
    <h5>LE BUDGET PREVISIONNEL</h5>
    <p>-Donner le budget prévisionnel du projet proposé en se référant au tableau ci-après</p>
    <p>-Vous pouvez rajouter ou supprimer des lignes si nécessaires par rapport à votre projet.</p>

    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Rubriques</th>
      <th scope="col" className="bg-dark text-light">Coût unitaire<br></br>(FCFA)</th>
      <th scope="col" className="bg-dark text-light">Quantité</th>
      <th scope="col" className="bg-dark text-light">Coût Total<br></br>(FCFA)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"className="bg-primary text-light">1. Ressources Humaines </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(1)</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-primary text-light">2. Prestataires artistiques et techniques </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(2)</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-primary text-light">3. Location de Logistiques </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(3)</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-primary text-light">4. Achats Fournitures et consommables </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(4)</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-primary text-light">5. Communication et supports  </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(5)</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-primary text-light"> 6. Frais généraux et divers
 (transport ; restauration ; divers et autres etc…) </td>
    </tr>
  
    <tr>
      <th scope="row">....</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td colspan="4"className="bg-grey text-light text-center">Sous-Total(6)</td>
    </tr>
    <tr>
      <td colspan="4">Total (somme des sous totaux 1,2,3,4) en FCFA</td>
    </tr>
   
   
  </tbody>
</table>
</div>
 <div className="col-md-6 ">
   <button type="submit" className="btn btn-primary">Retour</button>
 </div> 
 <div className="col-md-6 ">
   <button type="submit" className="btn btn-primary">Suivant</button>
 </div>
</form>
   </div>
   <Footer />
   </>

  )
}

export default FormProjet