import React from "react";

//This is the component which is rendered to display the Saved Books
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
                        <button className="btn btn-success" id={book_id} onClick={props.handleDelete}
                            style={{ margin: 10, float: "right", padding: 10 }}>Delete</button>

                    </li>
                )
            })}
        </ul>
    );
}





export default SavedBooks;