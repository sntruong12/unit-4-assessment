import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
import './App.css';

const CIRCLES = [1,2,3,4]

class App extends Component {
  state = {
    selectedCircle: 1
  }

  handleClick = (e) => {
    console.log(e.target.id)
    this.setState({
      selectedCircle: Number(e.target.id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circles={CIRCLES}
            selectedCircle={this.state.selectedCircle}
            handleClick={this.handleClick}
          />
          <Circles 
            circles={CIRCLES}
            selectedCircle={this.state.selectedCircle}
          />
        </main>
      </div>
    );
  }
}

export default App;
