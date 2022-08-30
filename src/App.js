import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Secteur from './components/admin/offres/Secteur';
import FormOffre from './components/admin/offres/FormOffre';
import ListOffres from './components/admin/offres/ListOffres';
import EditOffre from './components/admin/offres/EditOffre';
import Contact from './components/Contact';
import About from './components/About';








function App() {
  return (
    <div className="App">

    

    
        
        <Routes>
{/* User routes */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/soumission" element={<Soumission />} />
         
          <Route path="/details/:id" element={<Detail />} /> */}
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
{/* Admin routes */}
          <Route path="/admin/Secteur" element={<Secteur />} />
          <Route path="/admin/formOffre" element={<FormOffre />} />
          <Route path="/admin/listOffre" element={<ListOffres />} />
          <Route path="/admin/editOffre" element={<EditOffre />} />
          {/* <Route path="/admin/listProjet" element={<ListProjet />} /> */}
          {/* <Route path="/admin/detailprojet/:id" element={<DetailProjet />} /> */}
{/* Authentication routes */}
          {/* <Route path="/login" element={<Connexion />} />
          <Route path="/register" element={<Inscrire />} /> */}
         

        </Routes>
      
      

</div>
    
  );
}

export default App;
