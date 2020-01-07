import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useAuth0} from "./contexts/auth-context";
import Home from "./components/-----pages/Home";
import Profile from "./components/-----pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";

function App() {

  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
}
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/profile" component={Profile}></Route>
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
