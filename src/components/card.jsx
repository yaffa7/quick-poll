import React, { Component } from 'react'
import './card.css'

class Card extends Component{
    constructor(props) {
        super(props)
        this.state = props
    }

    totalVotes() {

    }

    winner() {
        let max = { value: 0}
        this.state.data.options.forEach(op => {
            if (op.value > max.value) {
                max = op
            }
        })
        return max.text
    }

    handleVote() {

    }

    render(){
        return (
            <div>
                <div className="card">
          <div className="header">
          <span className="votes">{this.totalVotes()}</span>
          <img src={this.state.data.avatar_url} alt="" className="avatar"/>
          <span className="logo">HQ</span>
          </div>
          <h2>{this.state.data.question}</h2>
          {this.state.data.options.map(option => 
            <div className={this.winner() === option.text ? 'progress' : 'progress winner'}>
              <span className="answer">{option.text}</span>
              <span className="votes">{option.value}</span>
            </div>         
            )}
        </div>
            </div>
        )

    }


}

export default Card