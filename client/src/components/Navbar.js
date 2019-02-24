import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <h1>Google Book Search</h1>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/Savedbooks">
        Saved
      </a>
    </nav>
  );
}

export default Nav;