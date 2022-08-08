import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import PostOffre from './components/PostOffre';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/" element={<PostOffre />} />
      
      <Route path="/details" element={<Detail />} />
  </Routes>

      
  
  );
}

export default App;
