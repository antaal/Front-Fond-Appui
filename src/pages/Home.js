import React from 'react'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import PostOffre from '../components/PostOffre';
import Slide from '../assets/Front/Slide';




 

const Home = () => {
  return (
    
    <div>
      
      <Header/>
     <Slide />
      <About />
      <hr class="featurette-divider" />
      <PostOffre />
       <Footer />
     
    </div>
  )
}

export default Home