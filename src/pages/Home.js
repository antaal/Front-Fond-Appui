import React from 'react'
import '../App.css';
import Layout from './Layout'
import Soumission from '../components/Soumission'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Caroussel from '../components/Caroussel';
import About from '../components/About';
import PostOffre from '../components/PostOffre';


 

const Home = () => {
  return (
    <div>
      
      <Header/>
      <About />
      <PostOffre />
    <Footer />
     
    </div>
  )
}

export default Home