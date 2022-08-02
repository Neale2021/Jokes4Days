import React, { Component} from 'react';
import '../App.css';
 import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';
 


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
              <Card style={{ display:'flex', width: '30rem'}}>
              <Card.Img className="card-img-top" src="./images/Untitled design (10).png" />
              <Card.Body>
                <Card.Title>DAD JOKE</Card.Title>
                <Card.Text>
                {this.getCategories()}
                </Card.Text>
                <Button variant="primary">{this.state.currJoke}</Button>
              </Card.Body>
            </Card>
          );
        }
             
            }
            
          
export default DadJokes;