import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    prophecy: '',
    prophecies: ['one', 'two'],
    value: ''
  }


  drawProphecyHandler = () => {
    const index = Math.floor(Math.random() * this.state.prophecies.length)
    const prophecy = this.state.prophecies[index]
    this.setState({
      prophecy
    })
  }

  addProphecyHandler = (value) => {
    const prophecies = this.state.prophecies
    prophecies.push(value)
    this.setState({
      prophecies,
      value: '',
      prophecy: ''
    })

    alert(`Your prophecy has been added. The prophecies are ${this.state.prophecies}`)
  }

  valueHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <button onClick={this.drawProphecyHandler}>Check the prophecy</button>
        <br></br>
        <input value={this.state.value} onChange={this.valueHandler}></input>
        <button onClick={() => this.addProphecyHandler(this.state.value)}> Add a new prophecy</button>
        <h1>{this.state.prophecy}</h1>
      </div>
    );
  }
}

export default App;
