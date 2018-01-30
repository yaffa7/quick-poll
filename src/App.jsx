import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      avatar_url: "https://avatars0.githubusercontent.com/u/9054709?v=4",
      response_count: 4001,
      question: "In what country was Trivial Persuit Created?",
      options: [
        {
          value: 13,
          text: "Canada",
          winner: true
        },
        {
          value: 56,
          text: "Japan",
          winner: false
        },
        {
          value: 36,
          text: "USA",
          winner: false
        }
      ]
    }

  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="header">
          <span className="votes">{this.state.response_count}</span>
          <img src={this.state.avatar_url} alt="" className="avatar"/>
          <span className="logo">HQ</span>
          </div>
          <h2>{this.state.question}</h2>
            <div className="progress winner" value={this.state.options[0].value} max="100">
              <span className="answer">{this.state.options[0].text}</span>
              <span className="votes">{this.state.options[0].value}</span>
            </div>
            <div className="progress" value={this.state.options[1].value} max="100">
              <span className="answer">{this.state.options[1].text}</span>
              <span className="votes">{this.state.options[1].value}</span>
            </div>  
            <div className="progress" value={this.state.options[2].value} max="100">
              <span className="answer">{this.state.options[2].text}</span>
              <span className="votes">{this.state.options[2].value}</span>
            </div>  
        </div>
      </div>
    );
  }
}

export default App;
