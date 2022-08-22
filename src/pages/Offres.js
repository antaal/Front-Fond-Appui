import React from 'react'
import styled from 'styled-components'

const Offres = ({offre}) => {
  return (
    <Card>
<div className="col-md-8  col-sm-6 mx-4 ">
<div className="card">
  <img  src={offre.images} className="card-img-top" alt="images"/>
  
  <div className="card-body">
    <h5 className="card-title">{offre.titre}</h5>
<a className="btn btn-primary" href="/details">En savoir Plus</a>
</div>
</div>
</div>

    </Card>

  

  )
}
const Card = styled.div`

width: 518px;
height: 200px;
margin-bottom: 150px;
margin-top:50px;


filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


export default Offres