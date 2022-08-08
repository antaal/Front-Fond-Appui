import React from 'react'
import Header from './Header'

const Soumission = () => {
  return (
    <>
     <Header />
    
       <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
        <h1>Information sur le Soumissionnaire</h1>
       </div>
    
    <div className='col-md-8 mx-auto'>
        <form className="row col-lg-12">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Nom Du Responsable</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6 mb-4">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-12 mb-4">
  <h1 className='text-center'>Statut Juridique</h1>
    <div className="col-md-12  d-flex justify-content-center  ">
    
           
           <div className="form-check form-check-inline ">
     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
     <label className="form-check-label" for="inlineRadio1">Association</label>
   </div>
   <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
     <label className="form-check-label" for="inlineRadio2">Individu</label>
   </div>
   <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked />
     <label className="form-check-label" for="inlineRadio3">Entreprise </label>
   </div>
   </div>
   </div>
   <div className="col-md-6 mb-4">
    <label for="inputEmail4" className="form-label">Domiciliation</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6 ">
    <label for="inputPassword4" className="form-label">Commune</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-6">
    <label for="inputAddress" className="form-label">Numero Telephonique</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Relevé d’Identité Bancaire</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Numéro d’identité National</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-12 mb-4">
    <label for="inputAddress2" className="form-label">Numéro Récépissé ou NINEA *</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6 ">
    <button type="submit" className="btn btn-primary">Retour</button>
  </div> 
  <div className="col-md-6 ">
    <button type="submit" className="btn btn-primary">Suivant</button>
  </div>
</form>
    </div>
    </>
  )
}

export default Soumission