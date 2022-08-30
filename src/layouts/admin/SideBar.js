import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>

                {/* <h1>SideBar</h1> */}
                <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar" id="sidebar">
      <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center"></h1>
      <div className="list-group rounded-0">
        <a href="#" className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
          <span className="bi bi-border-all"></span>
          <span className="ml-2">Dashboard</span>
        </a>
        <Link to='/admin/formOffre' className="list-group-item list-group-item-action border-0 align-items-center">
          <span className="bi bi-box"></span>
          <span className="ml-2">Offres</span>
        </Link>

        <Link to='/admin/Secteur' className="list-group-item list-group-item-action border-0 align-items-center">
          <span className="bi bi-box"></span>
          <span className="ml-2">Secteurs</span>
        </Link>

       
        
       
      </div>
    </div>
    
    <div className="w-100 vh-100 position-fixed overlay d-none" id="sidebar-overlay"></div>
   
    <div className="col-md-9 col-lg-10 ml-md-auto px-0">
      
    <nav className="w-100 d-flex px-4 py-2 mb-4 shadow-sm">
       
        <button className="btn py-0 d-lg-none" id="open-sidebar">
          <span className="bi bi-list text-primary h3"></span>
        </button>
        <div className="dropdown ml-auto">
          <button className="btn py-0 d-flex align-items-center" id="logout-dropdown" data-toggle="dropdown" aria-expanded="false">
            <span className="bi bi-person text-primary h4"></span>
            <span className="bi bi-chevron-down ml-1 mb-2 small"></span>
          </button>
          <div className="dropdown-menu dropdown-menu-right border-0 shadow-sm" aria-labelledby="logout-dropdown">
            <a className="dropdown-item" href="#">Logout</a>
            <a className="dropdown-item" href="#">Settings</a>
          </div>
        </div>
      </nav>
      
                {/* <h1>SideBar</h1> */}
    </div>
    </div>
  )
}

export default SideBar;