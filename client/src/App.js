import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Searchbooks from "./pages/Searchbooks";
import Savedbooks from "./pages/Savedbooks";
//import Nomatch from "./pages/Nomatch";
import Navbar from "./components/Navbar";

function App(){
    return (
      <Router>
        <div>
          <Navbar />
         <Route exact path="/" component={Searchbooks} />
        <Route exact path="/Searchbooks" component={Searchbooks} />
        <Route exact path="/Savedbooks" component={Savedbooks} />
        </div>
        </Router>
    );
  }

export default App;

