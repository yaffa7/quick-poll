import React, { Component } from 'react';
import './App.css';
import ResultsCard from './components/results-card'
import CreateCard from './components/create-card'
import data from './data/country.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : data,
      titleClassName: "title"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: this.state.data,
        titleClassName: "title show"
      })
    }, 200);
  }
  render() {
    let cardData = this.state.data.data
    return (
      <div>
        <h2 className={this.state.titleClassName}>Quick Poll</h2>
        <div className="center-container">
          <div className="btn-center show">Create Poll</div>
        </div>
        <div className="card-container">
          <div className="card-background">
            <ResultsCard data={cardData[0]} key={cardData[0].question} delay={800}/>
          </div>
          <div className="card-foreground">
            <ResultsCard data={cardData[1]} key={cardData[1].question} delay={500}/>
          </div>
          <div className="card-background">
            <ResultsCard data={cardData[0]} key={cardData[0].question} delay={800}/>
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
