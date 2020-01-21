import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./contexts/auth-context";
import Home from "./components/-----pages/Home";
import Profile from "./components/-----pages/Profile";
import Jobs from "./components/-----pages/Jobs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading1/Loading1";
import AppRouter from "./components/Router/Router";
import { Helmet } from "react-helmet";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading/>
  }

  // function load_js() {
  //   var head = document.getElementsByTagName('head')[0];
  //   var script = document.createElement('script');
  //   script.src = 'https://bb3jobboard.topechelon.com/job_board.js';
  //   head.appendChild(script);
  // }
  // load_js();


  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRouter/>
        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/jobs" component={Jobs}></Route>
        </Switch> */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>H3 Staffing</title>
          {/* <script src="https://bb3jobboard.topechelon.com/job_board.js" type="text/javascript"></script> */}
        </Helmet>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
