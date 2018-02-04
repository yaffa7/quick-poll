import React, { Component } from 'react'
import './results-card.css'

class ResultsCard extends Component {
  constructor(data) {
    super(data)
    this.state = data
    console.log(this.state)
  }

  totalVotes() {
    let sum = 0
    this.state.data.options.forEach(op => {
      sum += op.value
    })
    return sum
  }

  winner() {
    let max = { value: 0 }
    this.state.data.options.forEach(op => {
      if (op.value > max.value) {
        max = op
      }
    })

    return max.text
  }

  handleVote(answer) {
    let currState = this.state
    currState.data.options.forEach(op => {
      if (op.text === answer) {
        op.value++
      }
    })
    this.setState({ data: currState.data })
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="header">
            <span className="votes">{this.totalVotes()}</span>
            <img src={this.state.data.avatar_url} alt="" className="avatar" />
            <span className="logo">Quick Poll</span>
          </div>
          <h2>{this.state.data.question}</h2>
          {this.state.data.options.map(option =>
            <div onClick={() => this.handleVote(option.text)} className={this.winner() === option.text ? 'progress winner' : 'progress'} key={option.text}>
              <span className="answer">{option.text}</span>
              <span className="votes">{option.value}</span>
            </div>
          )}
        </div>
      </div>
    )

  }
}

export default ResultsCard