import React, { Component } from 'react';
import './App.css';
import ResultsCard from './components/results-card'
import CreateCard from './components/create-card'
import data from './data/country.json'

class App extends Component {
  constructor() {
    super()
    this.state = data
  }
  render() {
    let cardData = this.state.data
    return (
      <div>
        <div className="card-container">
          <div className="card-background">
            <ResultsCard data={cardData[0]} key={cardData[0].question}/>
          </div>
          <div className="card-foreground">
            <ResultsCard data={cardData[1]} key={cardData[1].question}/>
          </div>
          <div className="card-background">
            <ResultsCard data={cardData[0]} key={cardData[0].question}/>
          </div>
        </div>
        {/* <CreateCard/> */}
      </div>
    )
  }
}

function CardList({ props }) {
  return (
    <div>
    {props.map(card =>
    <div>
      <ResultsCard data={card} key={card.question}/>
    </div>
    )}
    </div>
  )
}

export default App;
