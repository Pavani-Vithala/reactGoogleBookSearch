import React from "react";
//This component is the Jumbotron which is rendered in all pages displaying the purpose of the app.

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>(React) Google Books Search</h1>
      <p>Search for and Save books of interest</p>
    </div>
  );
}

export default Jumbotron;

