import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [{
        avatar_url: "https://avatars0.githubusercontent.com/u/9054709?v=4",
        response_count: 4001,
        question: "In what country was Trivial Persuit Created?",
        options: [
          {
            value: 13,
            text: "Canada",
          },
          {
            value: 56,
            text: "Japan",
          },
          {
            value: 36,
            text: "USA",
          }
        ]
      }, {
        avatar_url: "https://avatars0.githubusercontent.com/u/9054709?v=4",
        response_count: 4001,
        question: "Which of the following is not a fruit?",
        options: [
          {
            value: 33,
            text: "Eggplant",
          },
          {
            value: 35,
            text: "Banana",
          },
          {
            value: 36,
            text: "Tomato",
          },
          {
            value: 22,
            text: "Potato"
          }
        ]
      }]
    }

  }
  render() {
    return (
      <div>
        <CardList props= {this.state.data}/>
      </div>
    )
  }
}

function CardList({ props }) {
  return (
    props.map(card =>
      <Card data={card} key={card.question}/>
    )
  )
}

export default App;
