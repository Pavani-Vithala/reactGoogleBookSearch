import React from "react";
import API from "../utils/API";


function SavedBooks(props) {
    return (
        <ul className="SavedBooks" style={{ borderStyle: "solid", borderWidth: 2, borderColor: "black" }}>
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
                        <button className="btn btn-success" id={book_id} onClick={(event) => { DeleteBookInfo(event,book_id) }}
                            style={{ margin: 10, float: "right", padding: 10 }}>Delete</button>

                    </li>
                )
            })}
        </ul>
    );

    function DeleteBookInfo(e,id)
    {
        let book_id = id;
        API.deleteBook(book_id).then(function (data) {
            if (data.status === "error") {
                throw new Error(data.message);
            }
            window.location.reload();

               
    });
}
}



export default SavedBooks;