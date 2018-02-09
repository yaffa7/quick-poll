import React, { Component } from 'react'
import './create-card.css'

class CreateCard extends Component {
  constructor() {
    super()
    this.state = 
    {
      question: 'Test QUetsion',
      options: [{text: 'one'}, {text: 'two'}],
      ExpireDate: new Date()
    }
  }
  
  render() {
    return (
      <div>
        <div className="card-create">
          <h2>Create Poll</h2>
            <input type="text" value={this.state.question}/>
            {this.state.options.map(op => 
                  <input type="text" value={op.text}/>
                )
            }
            <input type="text" value={this.state.ExpireDate}/>
            Expire (1m, 5m, 10m, 20m)
            image
          
            <button>Create</button>
        </div>
      </div>
    )
  }
}

export default CreateCard