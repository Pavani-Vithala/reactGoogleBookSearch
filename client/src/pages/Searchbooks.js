import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import DeleteBtn from "../../components/DeleteBtn";
//import API from "../../utils/API";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import Searchform from "../components/Searchform";

class Searchbooks extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    SearchBok:""
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log(this.state.SearchBook);
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("Entered handleFormSubmit function:");
    console.log(this.state.SearchBook);
    

    

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
          <p>{this.state.SearchBook}</p>
        </div>


      </div>

    );
  }
}

export default Searchbooks;