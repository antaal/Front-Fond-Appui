import React from 'react';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import Navbar from './Navbar';

import SideBar from './SideBar'


const MasterLayout = () => {
  return (
    
    <>
    
    <div>
    <SideBar />
        
        <main class="container">
       <Navbar />
        
        <div class="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
  <div class="container">
    <h1 class="display-4 mb-2 text-primary">Simple</h1>
    <p class="lead text-muted">Simple Admin Dashboard with Bootstrap.</p>
  </div>
</div>
      </main>
      </div>
        
       

        </> 
   
    // <div>coucou</div>
  )
}


export default MasterLayout