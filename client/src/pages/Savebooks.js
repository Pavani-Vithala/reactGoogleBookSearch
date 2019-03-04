import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";


class SaveBooks extends Component {
  state = {
    books: []
    //title: "",
   // author: "",
    //description: "",
    //image: "",
   // link: ""
  };

  componentDidMount() {
    API.getBook()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
   
  }

   render() {
    return (
      
        <div className="main-content saved">
          <Jumbotron />
          <h3>Saved Books</h3>
          <div className="book-info">
            <SavedBooks results={this.state.books} />
          </div>
        </div>
     
    );
  }
}
export default SaveBooks;