import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResultsContainer from "../components/ResultsContainer";


class Searchbooks extends Component {
  // Setting our component's initial state
  state = {
    books : [],
    SearchBook: "",
    SavedBooks: [],
    bookToSave:[]
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
       API.getBook().then(res => {
      if(res.data.status === "error"){
        throw new Error(res.data.message);
        }
        
        this.setState({SavedBooks:res.data});
    }).catch(err => this.setState({ error: err.message }));
  
    
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
        let book = [];
        let SavedBookId1 = [];
        var saved = 0;
        
        for(var j=0;j<this.state.SavedBooks.length;j++)
        {
          SavedBookId1.push(this.state.SavedBooks[j].book_id);
        }
                
        for (var i = 0; i < result.length; i++) {
          let temp ={};
          let id = result[i].id;
          for(j=0;j<SavedBookId1.length;j++)
          {
           
            if (SavedBookId1[j] === id)
            {
                saved = 1;
                break;
            }
            else
            {
              saved = 0;
            }
            
          }
         
          if (saved !== 1)
          {
           
          let Desc1 = result[i].searchInfo["textSnippet"];
          let title1 = result[i].volumeInfo["title"];
          let author1 = result[i].volumeInfo.authors[0];
          let image1 = result[i].volumeInfo.imageLinks["thumbnail"];
          let Link = result[i].volumeInfo["previewLink"];
          temp.book_id = id;
          temp.title = title1;
          temp.author = author1;
          temp.description = Desc1;
          temp.link = Link;
          temp.picture = image1;            
          book.push(temp);
          }
         
        }

        this.setState({books:book});
        
       
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

        <ResultsContainer results={this.state.books}/>

      </div>

    );
  }
  
};

export default Searchbooks;