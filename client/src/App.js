import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbooks from "./pages/Searchbooks";
import Savedbooks from "./pages/Savedbooks";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Searchbooks} />
          <Route exact path="/Savedbooks" component={Savedbooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;