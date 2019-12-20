import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/-----pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>H3 Staffing</title>
          <script src="https://bb3jobboard.topechelon.com/job_board.js" type="text/javascript"></script>
        </Helmet>
      </div>
    </Router>

  );
}

export default App;
