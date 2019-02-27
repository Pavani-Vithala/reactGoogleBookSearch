import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul style={{ "listStyleType": "none"}}>
     <li>
       <img src= "../images/bookstack.jpg" alt="Book"></img>
     </li>
      <li>
      <h3>Google Books</h3>
      </li>
      <li className="nav-item">
        <a href="/Searchbooks" className={window.location.pathname === "/Searchbooks" ? "nav-link active" : "nav-link"}>
         Search
        </a>
      </li>
      <li className="nav-item">
        <a href="/Savedbooks" className={window.location.pathname === "/Savedbooks" ? "nav-link active" : "nav-link"}>
        Saved
        </a>
      </li>
      
      </ul>
    </nav>
  );
}

export default Navbar;


