import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

import CategoryButton from '../categoryButton'

function LandingPageButton() {
  return <Link to="/Home" class="nav-link">
      <button class="btn btn-info" > 
          <span style={{"font-size": "24px"}}>
              Home
          </span>
      </button>
  </Link>
}




class RandomJokes extends Component {
    constructor(props) {
      super(props)
      this.categories = [ 'Random']
      this.state = {
        currCategory : null,
        currJoke: "",
        userJokes: [],
      }
  
    }
    getCategories() {
        return this.categories.map((cat, i) => {
          let color = 'black'
          if (this.state.currCategory === cat) {
            color = 'red'
          }
          return (
            <CategoryButton label='Click Here' style={{backgroundColor: color}} onClick={(e) => {
                  console.log("Setting cur category to: ")
                  console.log(cat)
                  this.setState({ currCategory: cat })
            
                  this.state.currCategory = cat;
                  console.log(this.state.currCategory)
                  this.getJoke()
                }
              } 
            />
          
        )})}
        getJoke() {
            console.log(this.state.currCategory)
            let cat = this.state.currCategory
            if (cat === 'Random') {
              this.randomJoke()
            }
        }
      
        randomJoke() {
   
            let url = 'https://v2.jokeapi.dev/'
             fetch(url, {headers: {'Accept': 'application/json'}})
             
                 .then(res => {
                     console.log(res)
                     return res.json()
                 }).then(
                     (result) => { 
                         console.log(result)
                         let joke = result.setup + ' ' + result.punchline
                         console.log(joke)
                         this.setState({currJoke: joke})
                     }
                 ).catch((err) => { console.log(err.message) })}
           
        render() {

          return (
            <Card style={{ display:'flex', width: '30rem'}}>
            <Card.Img className="card-img-top" src="./images/random.png" />
            <Card.Body>
              <Card.Title>RANDOM JOKES</Card.Title>
              <Card.Text>
              {this.getCategories()}
              </Card.Text>
              <Button variant="primary">{this.state.currJoke}</Button>
            </Card.Body>
            <div>
      <LandingPageButton />
      </div>
          </Card>
        
        );
      }
           
          }
                      
                      

        export default RandomJokes;