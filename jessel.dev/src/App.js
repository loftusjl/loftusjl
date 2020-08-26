import React from "react";
import { Router, Route, Switch } from "react-router";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
