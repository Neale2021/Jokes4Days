import React from "react";
import Nav from "./components/Nav"
import Home from "./components/Home";
import DadJokes from "./components/dadJokes"
import GeekJokes from "./components/geekJokes"
import RandomJokes from "./components/randomJokes"
import './App.css';

import { BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import TopButton from "./button";

function App() {
  return (
    <Router>
        <Nav/>
        <TopButton/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Geek" element={<GeekJokes/>} />
          <Route path="/Dad" element={<DadJokes />} />
          <Route path="/Random" element={<RandomJokes/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}


export default App;
