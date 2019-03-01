import React from "react";


function Resultscontainer(props) {
  return (
    <div className="Results-container" style={{borderStyle:"solid",borderWidth: 2, borderColor: "black"}}>
      {props.results.map(result => (
       <div key={result.id} className="Result-item" style={{padding:30, borderStyle:"solid",borderWidth: 2, borderColor: "black"}}>
       <a href = {result.Link}>
        <h3>{result.title}</h3>
        <h4>Written By {result.author}</h4>
        <img alt="imageLink" src={result.imagelink} className="img-fluid" style={{position:"relative"}}/>
        <p style={{alignContent:"center",fontSize :20}}>{result.description}</p></a>
         <button className="btn btn-success" id={result.id} style={{marginBottom:10,float:"right",padding:10}}>Save</button>
         <a href = {result.Link}><button className="btn btn-success" style={{marginBottom:10,float:"right",padding:10}}>View</button></a>
        </div>
      ))}
    </div>
  );
}

export default Resultscontainer;
