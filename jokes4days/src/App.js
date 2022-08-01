import React from "react";
import Navigationbar from "./components/Navagationbar"
import Home from "./components/Home";
import DadJokes from "./components/dadJokes"
import GeekJokes from "./components/geekJokes"
import RandomJokes from "./components/randomJokes"
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/Home' component={Home}/>
                <Route path='/dadJokes' component={DadJokes}/>
                <Route path='/geekJokes' component={GeekJokes}/>
                <Route path='/randomJokes' component={RandomJokes}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;