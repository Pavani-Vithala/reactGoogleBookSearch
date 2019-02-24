import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
//import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import Searchform from "../../components/Searchform";

class Searchbooks extends Component {
    // Setting our component's initial state
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: "",
      searchBook: ""
    };
 // Handles updating component state when the user types into the input field
 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render()
  {
      return(
          <div>
          <Jumbotron/>
          <Searchform
                value={this.state.search}
                handleInputChange={this.handleInputChange}
/>
            
    
</div>    

      );
  }
}

export default Searchbooks;