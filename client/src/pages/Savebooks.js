import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";


class SaveBooks extends Component {
  state = {
    books: []
  };
    componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBook().then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      //console.log("Displaying saved books");
      this.setState({ books: res.data });
    }).catch(err => this.setState({ error: err.message }));
  };

  handleDelete = (event) => {
    event.preventDefault();
    let book_id = event.target.id;
    API.deleteBook(book_id).then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
        this.loadBooks();

    });

  };

  render() {
    return (

      <div className="main-content saved">
        <Jumbotron />
        <h3>Saved Books</h3>
        <div className="book-info">
          <SavedBooks results={this.state.books} handleDelete={this.handleDelete} />
        </div>
      </div>

    );
  }

}
export default SaveBooks;