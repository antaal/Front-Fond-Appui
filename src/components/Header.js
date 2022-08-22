import React from 'react'

const Header = () => {
  return (
    <>
    <div className="mb-4 ">
    <div className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="d-inline-block">
              <i className="bi bi-mail fg-primary"></i> <a href="mailto:contact@mail.com">contact@mail.com</a>
            </div>
            <div className="d-inline-block ml-2">
              <i className="bi bi-phone fg-primary"></i> <a href="tel:+0011223495">+0011223495</a>
            </div>
          </div>
            <div className="col-md-4">
                <div className="d-inline-block align-center">
                    <img src={"images/Rectangle.png"} alt='rectangle' className='rectangle center'/>
                </div>
            </div>
          <div className="col-md-4 text-right d-none d-md-block">
            <div className="social-mini-button">
              <a href="Accueil"><img src={"/images/facebook.png"} alt="fab"/></a>
              <a href="Accueil"><img src={"/images/twitter.png"} alt="fab"/></a>
              <a href="Accueil"><img src={"/images/youtube.png"} alt="fab"/></a>
              <a href="Accueil"><img src={"/images/telephone.png"} alt="fab"/></a>
                

            </div>
          </div>
        </div>
      </div> 
    </div> 

    <nav className="navbar navbar-expand-lg navbar-light shadow-sm mt-3">
      <div className="container">
        <img src={"/images/logo1.png"} className="navbar-brand" alt="logo" />
        <a href="Accueil" className="navbar-brand">Ville de <i className="text-success">Dakar.</i></a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="navbar-toggler-icon"></i>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
            <li className="nav-item">
              <a href="index.html" className="nav-link bg-red">Accueil</a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">A Propos</a>
            </li>
            <li className="nav-item">
              <a href="services.html" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="portfolio.html" className="nav-link">S'Inscrire</a>
            </li>
          </ul>
        </div>
      </div> 
    </nav> 

 </div>
   
    </>
  )
}

export default Header