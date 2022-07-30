import React from "react";
import Nav from "./jokes4days/src/components/Nav"
import Home from "./";
import dadJokes from "./pages/dadJokes";
import geekJokes from "./pages/geekJokes";
import randomJokes from "./pages/randomJokes";
import './App.css';
import { BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import TopButton from "./jokes4days/src/button";

function App() {
  return (
    <Router>
        <Nav/>
        <TopButton/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Geek" element={<geekJokes/>} />
          <Route path="/Dad" element={<dadJokes />} />
          <Route path="/Random" element={<randomJokes/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}


export default App;
