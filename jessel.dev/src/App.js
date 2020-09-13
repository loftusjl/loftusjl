import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
