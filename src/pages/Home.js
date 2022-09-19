import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
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