import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/-----pages/Home";

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
