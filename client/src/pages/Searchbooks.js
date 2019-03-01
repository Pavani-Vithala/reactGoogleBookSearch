import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Resultscontainer from "../components/Resultscontainer";


class Searchbooks extends Component {
  // Setting our component's initial state
  state = {
    books : [],
    SearchBook: "",
    //results: []
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    //console.log(this.state.SearchBook);
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.searchBooks(this.state.SearchBook)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        var result = res.data.items;
        console.log(result);
        var book = [];
        for (var i = 0; i < result.length; i++) {
          var temp ={};
          var id = result[i].id;
          var Link = result[i].selfLink;
         // console.log(Link);
          var Desc1 = result[i].searchInfo["textSnippet"];
          //console.log(Desc1);
          var title1 = result[i].volumeInfo["title"];
          //console.log("Title is" + title1);
          var author1 = result[i].volumeInfo.authors[0];
          //console.log("author is" + author1);
          var image1 = result[i].volumeInfo.imageLinks["thumbnail"];
         // console.log("image link is" +  image1);
          temp.id = id;
          temp.title = title1;
          temp.author = author1;
          temp.imagelink = image1;
          temp.description = Desc1;
          temp.bookLink = Link;
          book.push(temp);
          //book.push({"title": title1},{"author": author1},{"imageLink": image1},{"description": Desc1},{"bookLink": Link});
          // console.log("Pushed into book array");
         // console.log(book[i]);
        }
        this.setState({books:book});
        console.log(this.state.books);
        //this.setState({ books: res.data, error: "" });
        // this.setState({results:this.state.books.items});
        //console.log(this.state.results);
        // this.setState({title:this.state.results.volumnInfo[0]});
        // console.log(this.state.title);
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
      <div>
        <Jumbotron />
        <div className="Container">
          <h4>Book Search</h4>
          <h6>Book</h6>
          <form className="SearchForm">
            <input type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange} name="SearchBook" />
            <button id="Search" className="btn btn-success" onClick={this.handleFormSubmit} >Search</button>
          </form>

        </div>
        <div className="Results">

        </div>

        <Resultscontainer results={this.state.books} />

      </div>

    );
  }
};

export default Searchbooks;