import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";
function Nav() {
  return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">Weather App</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
      
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Weather">Weather</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
<div>
<div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
  <ul className="navbar-nav">
         <li className="nav-item">
           <Link className="nav-link text-white h4" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-white h4" to="/Weather">Weather</Link>
         </li>
       </ul>
  </div>
</div>
<nav className="navbar navbar-dark bg-dark" style={{height:"60px"}}>
  <div className="container-fluid" style={{margin:"5px"}}>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h3>
    <Link className="navbar-brand" to="/">
    Weather App
    </Link>
    </h3>
  </div>
</nav>
</div>

    // <div className="navbar">
    //     <div className="navItems">Weather App
    //     <ul className="items">
    //         <li><Link to='/'>Home</Link></li>
    //         <li><Link to='./weather'>Weather</Link></li>
    //     </ul></div>
    // </div>
  )
}
export default Nav;