import axios from "axios";

export default {
    //Search for books based on title
   searchBooks: function(bookname) {
          return axios.get("https://www.googleapis.com/books/v1/volumes?q=" +bookname + "&key=AIzaSyDQch2qaxm81rit7bMeCwbWvjAPeKeCSBo");
        },   
    
 
  // Gets the book with the given id
  getBook: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

