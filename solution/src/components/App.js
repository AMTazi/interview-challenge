import React, { Component } from 'react';
import Header from './Header'
import Values from './Values'
import Map from './Map'
import calculator from '../calculator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: [],
      water_size: 0,
      length: 0,
    }
  }

  run(input) {
    const { water_size, map } = calculator(input)
    this.setState({water_size, map, length: input.length})
  }

  reset() {
    this.setState({map: [], water_size: 0, length: 0})
  }

  render() {
    return (
      <div>
        <Header run={this.run.bind(this)} reset={this.reset.bind(this)}/>
        <Values water_size={this.state.water_size} />
        <Map map={this.state.map} length={this.state.length} />
      </div>
    );
  }
}

export default App;
