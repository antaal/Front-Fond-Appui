import React from 'react'
import styled from 'styled-components'

const Connexion = () => {
  return (
    <Wrapper>
      <ImageWrapper>
          <img src={"/images/connexion.png"} alt="ime2" />
        </ImageWrapper>
        <Content>
        <div >
        <form className="row col-lg-12">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Nom Du Responsable</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6 mb-4">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
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
        </Content>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  background-color: #f5f5f5;
  `
const Content = styled.div`
`
const ImageWrapper = styled.div`
`


export default Connexion