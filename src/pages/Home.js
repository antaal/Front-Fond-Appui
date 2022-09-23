import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import PostOffre from '../components/PostOffre';
import Caroussel from '../components/Caroussel';



 

const Home = () => {
  return (
    <div>
      
      <Header/>
      <Caroussel />
      <About />
      <PostOffre />
       <Footer />
     
    </div>
  )
}

export default Home