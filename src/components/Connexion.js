import React from 'react'
import styled from 'styled-components'

const Connexion = () => {
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Submit')
  // }
  return (
    <Wrapper>
      <ImageWrapper>
          <img src={"/images/connexion.png"} alt="ime2" />
        </ImageWrapper>
        <Content>
        <div >
          <h1>Connexion</h1>
        <form className="row col-lg-12" >
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Votre Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-12 mb-4">
    <label for="inputPassword4" className="form-label">Votre mot de Passe</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  
 
  <div className="col-md-12">
    <p>Mot de  passe oublié? Rénitialiser <a href='/inscrire' className='text-success'>S’Inscrire</a></p>
  </div>
  <div className="col-md-6 ">
    <button type="submit" className="btn btn-primary">Envoyer</button>
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
  height:500px;

  
  
  background-color: #f5f5f5;
  `
const Content = styled.div`
`
const ImageWrapper = styled.div`
  
`


export default Connexion;