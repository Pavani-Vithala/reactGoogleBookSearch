import React from "react";
import Jumbotron from "../components/Jumbotron";

const Savedbooks = () => {
    return (
        <div className="main-content saved">
        <Jumbotron/>
            <h3>Saved Books</h3>
            <div className="book-info">
            <ul>
                <li>
                    <p>Harry Potter1</p>
                </li>
                <li>
                    <p>Harry Potter2</p>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Savedbooks;