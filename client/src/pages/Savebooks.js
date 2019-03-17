import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";


class SaveBooks extends Component {
  state = {
    books: [],
    SavedBooks: []
    // author: "",
    //description: "",
    //image: "",
    // link: ""
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



 /* componentDidMount() {
    API.getBook().then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      //console.log("Displaying saved books");
      this.setState({ books: res.data });
    }).catch(err => this.setState({ error: err.message }));


  }*/

  handleDelete = (event) => {
    event.preventDefault();
   // this.setState({ SavedBooks: this.state.books });
    let book_id = event.target.id;
    API.deleteBook(book_id).then(function (data) {
      if (data.status === "error") {
        throw new Error(data.message);
      } 
    
      console.log("Deleted the book successfully:"+ book_id);
         API.getBook().then(function (data) {
           if (data.status === "error") {
             throw new Error(data.message);
           }
        this.setState({ SavedBooks: data });
        console.log(this.state.SavedBooks);
        }).catch(err => console.log(err));
       //this.setState({books: this.state.SavedBooks});*/
      //
      // this.loadBooks();
      
    });
    this.setState({books:this.state.SavedBooks});
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