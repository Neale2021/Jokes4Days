import React from "react";
import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/DadJokes" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                DadJokes
            </span>
        </button>
    </Link>
}
    function LandingPageButton2() {
      return <Link to="/GeekJokes" class="nav-link">
          <button class="btn btn-warning" > 
              <span style={{"font-size": "24px"}}>
                 GeekJokes
              </span>
          </button>
      </Link>
}
function LandingPageButton3() {
  return <Link to="/RandomJokes" class="nav-link">
      <button class="btn btn-success" > 
          <span style={{"font-size": "24px"}}>
             RandomJokes
          </span>
      </button>
  </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        position: "flex",
        
        padding: "30% 10% 10% 10%",
        color: "white",
        
    }
    return <div style={style}>
        
        <div style={{"font-size": "66px"}}>
           JOKES 4 DAYS!
        </div>
        
        <div style={{"font-size": "36px"}}>
         Click the Jokes you want to see and have a laugh on me!
        </div>
        <br />
        <LandingPageButton />
        <br />
        <LandingPageButton2 />
        <br />
        <LandingPageButton3 />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("images/home.png")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "flex",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}

export default Home