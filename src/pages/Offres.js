import React from 'react'
import styled from 'styled-components'

const Offres = ({offre}) => {
  return (
    <Card>
<div className="col-md-8">
<div className="card mb-4">
  <img  src={offre.images} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{offre.titre}</h5>
<button className="btn btn-primary">En savoir plus</button>
</div>
</div>
</div>

    </Card>


  )
}
const Card = styled.div`

width: 518px;
height: 200px;



filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


export default Offres