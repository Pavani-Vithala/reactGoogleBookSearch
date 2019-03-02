import React from "react";


function Resultscontainer(props) {
  return (
    <ul className="Results-container" style={{borderStyle:"solid",borderWidth: 2, borderColor: "black"}}>
      {props.results.map(result => (
       <li key={result.id} className="Result-item" style={{padding:30, borderStyle:"solid",borderWidth: 2, borderColor: "black"}}>
        <h3>{result.title}</h3>
        <h4>Written By {result.author}</h4>
        <img alt="imageLink" src={result.imagelink} className="img-fluid" style={{position:"relative"}}/>
        <p style={{alignContent:"center",fontSize :20}}>{result.description}</p>
        <a href = {result.bookLink}><button className="btn btn-success" style={{margin:10,float:"right",padding:10}}>View</button></a>
         <button className="btn btn-success" id={result.id} onClick=saveBookInfo() style={{margin:10,float:"right",padding:10}}>Save</button>
         
        </li>
      ))}
    </ul>
  );
  function saveBookInfo(){

    
  }
}

export default Resultscontainer;
