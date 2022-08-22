import React from 'react'
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './pages/Home';





function App() {
  return (
    <div className="App">

    

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<MasterLayout />} />
        </Routes>
      
      </BrowserRouter>

</div>
    
  );
}

export default App;
