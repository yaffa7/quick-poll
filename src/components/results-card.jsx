import React, { Component } from 'react'
import './results-card.css'

class ResultsCard extends Component {
  constructor(data) {
    super(data)
    this.state = {
      cardData: data,
      cardClassName: "card" ,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cardClassName: "card show"
      })
    }, this.props.delay);
  }

  totalVotes() {
    let sum = 0
    this.state.cardData.data.options.forEach(op => {
      sum += op.value
    })
    return sum
  }

  winner() {
    let max = { value: 0 }
    this.state.cardData.data.options.forEach(op => {
      if (op.value > max.value) {
        max = op
      }
    })
    return max.text
  }

  handleVote(answer) {
    let currState = this.state
    currState.cardData.data.options.forEach(op => {
      if (op.text === answer) {
        op.value++
      }
    })
    this.setState({ 
      cardData: currState.cardData,
      cardClassName: this.state.cardClassName
    })
  }

  getProgressWidthStyle(option){
    let percentWidth = option.value/this.totalVotes() * 100
    return {
      width: `${percentWidth}%`
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.cardClassName}>
          <div className="header">
            <span className="votes">{this.totalVotes()}</span>
            {/* <img src={this.state.data.avatar_url} alt="" className="avatar" /> */}
            <span className="logo">Quick Poll</span>
          </div>
          <h2>{this.state.cardData.data.question}</h2>
          {this.state.cardData.data.options.map(option =>
            <div onClick={() => this.handleVote(option.text)} className={this.winner() === option.text ? 'progress winner' : 'progress'} key={option.text}>
            <div className={this.winner() === option.text ? 'progress-bar winner' : 'progress-bar'} key={option.text} style={this.getProgressWidthStyle(option)}></div>
              <div className="level">
                <span className="answer" style={this.winner() === option.text ? {color: '#636363'} : {color: '#b3b3b3'}}>{option.text}</span>
                <span className="votes">{option.value}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ResultsCard