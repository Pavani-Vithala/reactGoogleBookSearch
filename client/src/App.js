import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Searchbooks from "./pages/Searchbooks";
import Savebooks from "./pages/Savebooks";
import Navbar from "./components/Navbar";

function App(){
    return (
      <Router>
        <div>
          <Navbar />
            <Route exact path="/" component={Searchbooks} />
            <Route exact path="/Search" component={Searchbooks} />
            <Route exact path="/Saved" component={Savebooks} />
         </div>
       </Router>
    );
  }

export default App;

