import React from "react";
import API from "../utils/API";

function ResultsContainer(props) {
    return (
        <ul className="Results-container" style={{ borderStyle: "solid", borderWidth: 2, borderColor: "black" }}>
            {props.results.map((result, i) => {

                const { book_id, title, author, picture, link, description } = result;
                return (
                    <li key={i} className="Result-item" style={{ borderStyle: "solid", borderWidth: 2, borderColor: "black" }}>

                        <h3>{title}</h3>
                        <h4>Written By {author}</h4>
                        <img alt="imageLink" src={picture} className="img-fluid" style={{ position: "relative" }} />
                        <p style={{ alignContent: "center", fontSize: 20 }}>{description}</p>
                        <a href={link}><button className="btn btn-success"
                            style={{ margin: 10, float: "right", padding: 10 }}>View</button></a>
                        <button className="btn btn-success" id={book_id} onClick={(event) => { saveBookInfo(event, result) }}
                            style={{ margin: 10, float: "right", padding: 10 }}>Save</button>

                    </li>
                )
            })}
        </ul>
    );
    function saveBookInfo(event, bookdata) {
        //let id = event.target.id;
        let bookToSave = bookdata;
        console.log(bookToSave);
        API.saveBook(bookToSave).then(function (data) {
            if (data.status === "error") {
                throw new Error(data.message);
            }
            console.log(data);

               
    });
}
    }

export default ResultsContainer;