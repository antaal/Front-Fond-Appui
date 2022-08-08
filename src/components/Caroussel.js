import React from 'react'

const Caroussel = () => {
  return (
    <div>
         <div class="page-banner home-banner mb-5">
      <div class="slider-wrapper">
        <div class="owl-carousel hero-carousel">
          <div class="hero-carousel-item">
          <img src={"/images/barth.jpg"} alt="barth" />
            <div class="img-caption">
              <div class="subhead">We're design studio believe in ideas</div>
              <h1 class="mb-4">Creative Design</h1>
              <a href="#services" class="btn btn-outline-light">Get Started</a>
            </div>
          </div>
          <div class="hero-carousel-item">
          <img src={"/images/barth.jpg"}  alt="barth" />
            <div class="img-caption">
              <h1 class="mb-4">We combine Design, Thinking, and Technical</h1>
              <a href="#services" class="btn btn-outline-light">Get Started</a>
              <a href="#services" class="btn btn-primary">See Pricing</a>
            </div>
          </div>
          <div class="hero-carousel-item">
          <img src={"/images/barth.jpg"}  alt="barth" />
            <div class="img-caption">
              <div class="subhead">Easy way to build perfect website</div>
              <h1 class="mb-4">Beautify handcrafted templates for your website</h1>
              <a href="#services" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3">
            <div className="subhead">About Us</div>
            <h2 className="title-section">We are <span className="fg-primary">Professional Teams</span> to Growth your Business</h2>

            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of</p>
          </div>
          <div className="col-lg-6 py-3">
            <div className="about-img">
            <img src={"/images/barth.jpg"}  alt="barth" />
            </div>
          </div>
        </div>
      </div> 
    </div> 
    </div>
  )
}

export default Caroussel