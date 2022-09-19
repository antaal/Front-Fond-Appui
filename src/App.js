import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import {authContext} from './helpers/AppContext';
import Secteur from './components/admin/offres/Secteur';
// import FormOffre from './components/admin/offres/FormOffre';
// import ListOffres from './components/admin/offres/ListOffres';
import ListProjet from './components/admin/projets/ListProjet';
import DetailProjet from './components/admin/projets/DetailProjet';
import Contact from './components/Contact';
import About from './components/About';
import Soumission from './components/Soumission';
import Offres from './components/admin/testOffre/Offres';
import New from './components/admin/testOffre/New';
import PostOffre from './components/PostOffre';
// import Offres from './pages/Offres';
import Home from './pages/Home';
import DetailsOffres from './pages/DetailsOffres';
import Detail from './components/Detail';
import Connexion from './pages/auth/Connexion';
import Inscrire from './pages/auth/Inscrire';
import ImageUpload from './components/ImageUpload';
import FormOffre from './components/admin/offres/FormOffre';
import EditOffre from './components/admin/offres/EditOffre';
import ListOffres from './components/admin/offres/ListOffres';
const url = "http://127.0.0.1:8000/api"










function App() {
//   const [logged, setLogged] = useState(false)
//   const [user, setUser] = useState(undefined)

// useEffect(()=>{
//   userInfo();
// },[]);

// const userInfo = async () => {
//   if (localStorage.getItem('user_token')) {
//     await axios.get(`${url}/user`,{
//       headers: {
//           Authorization: `Bearer ${localStorage.getItem('user_token')}`
//       }
//   })
//   .then(response => {
     
//       console.log(response.data);
//       setLogged(true)
//       setUser(response.data)
      
//   })
//   .catch(error => {
//       console.log(error);
//   });
// }
// }
  return (
    // <authContext.Provider value={{logged, setLogged, user,setUser}}>
    <div className="App">

    

    
        
        <Routes>
{/* User routes */}
<Route exact path="/upload-image" element={<ImageUpload/>}/>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/soumission" element={<Soumission />} />
           <Route path="/postOffre" element={<PostOffre />} />
           <Route path="/details/:id" element={<Detail />} />
           <Route path="/detailsOffres" element={<DetailsOffres />} />
{/* Admin routes */}
          <Route path="/admin/Secteur" element={<Secteur />} />
          <Route path="/offre/new" element={<FormOffre />} />
          <Route path="/offre/edit/:id" element={<EditOffre />} />
          <Route exact path='/list' element={<ListOffres />} />
          {/* <Route path="/offres" element={<Offres />} /> */}
          <Route path="/admin/editOffre" element={<EditOffre />} />
          <Route path="/admin/listProjet" element={<ListProjet />} /> 
           <Route path="/admin/detailprojet/:id" element={<DetailProjet />} />
{/* Authentication routes */}
          <Route path="/login" element={<Connexion />} />
          <Route path="/register" element={<Inscrire />} />
         

        </Routes>
      
      

</div>
// </authContext.Provider>
    
  );
}

export default App;
