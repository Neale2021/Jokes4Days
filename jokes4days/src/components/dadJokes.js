import React, { Component } from 'react';
import '../App.css';
import CategoryButton from '../categoryButton'


class DadJokes extends Component {
    constructor(props) {
      super(props)
      this.categories = ['Dad']
      this.state = {
        currCategory : null,
        currJoke: "",
        userJokes: [],
      }
  
    }
    getCategories() {
        return this.categories.map((cat, i) => {
          let color = 'rgb(170, 55, 206)'
          if (this.state.currCategory === cat) {
            color = '#e59244'
          }
          return (<li key={cat}>
            <CategoryButton label={cat} style={{backgroundColor: color}} onClick={(e) => {
                  console.log("Setting cur category to: ")
                  console.log(cat)
                  this.setState({ currCategory: cat })
            
                  this.state.currCategory = cat;
                  console.log(this.state.currCategory)
                  this.getJoke()
                }
              } 
            />
          </li>)
        })}
        getJoke() {
            console.log(this.state.currCategory)
            let cat = this.state.currCategory
            if (cat === 'Dad') {
              this.dadJoke()
            }
        }
      
      
        dadJoke() {
          let url = 'https://icanhazdadjoke.com/'
          fetch(url, {headers: {'Accept': 'application/json'}})
              .then(res => {
                  console.log(res)
                  return res.json()
              }).then(
                  (result) => { 
                      console.log(result)
                      console.log(result.joke)
                      this.setState({currJoke: result.joke})
                  }
              ).catch((err) => { console.log(err.message) })
        }
        render() {
    
            return (
              <div className="App">
                <p>Click the button, it will give you a new joke!</p>
                <h2>{this.state.currJoke}</h2>
                <ul className = "categoryList">
                  {this.getCategories()}
                </ul>
              
              </div>
            );
          }
        }

        export default DadJokes;