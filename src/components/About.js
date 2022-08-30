import React from 'react'

const About = () => {
  return (
    
          <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
      
       <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 py-3">
       
            <h2 className="title-section"> Ville de <span className="fg-success">Dakar</span> .</h2>

            <p>La ville de Dakar est une collectivité locale, chef lieu de la capitale Sénégalaise. Elle épouse les contours du département de Dakar, elle est dotée d’une personnalité morale et d’une autonomie financière. La Ville de Dakar fut créée le 25 mai 1857, elle occupe une superficie de 83 km², et sa population est estimée à plus de 2 millions d’habitants. Elle est divisée en dix-neuf communes dirigées chacune par un Maire.  

L’institution est composée de dix directions avec plus de 1600 agents et 800 volontaires. La ville de Dakar a un budget annuel qui dépasse les 60 millions d’euros, soit 40 milliards de Francs CFA.</p>
          </div>
          <div className="col-lg-4 py-3">
            <div className="about-img">
            <img src={"/images/barth.jpg"}  alt="barth" />
            </div>
          </div>
        </div>
      </div> 
    </div> 
      <div>
      <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Dakar%2CSenegal+(Maire%20Dakar)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
      
      </div>
    </div>
  )
}

export default About