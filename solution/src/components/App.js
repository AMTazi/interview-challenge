import React, { Component } from 'react';
import Header from './Header'
import Values from './Values'
import Map from './Map'
import calculator, { build_map } from '../calculator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: [],
      water_size: 0,
      length: 0,
      pending: false,
    }
  }

  async run(input) {
    this.setState({pending: true})

    const { water_size, tasks } = calculator(input)
    this.setState({water_size, length: input.length})

    const map = await build_map(tasks)
    this.setState({map, pending: false})
  }

  reset() {
    this.setState({map: [], water_size: 0, length: 0})
  }

  render() {
    return (
      <div>
        <Header run={this.run.bind(this)} reset={this.reset.bind(this)}/>
        <Values water_size={this.state.water_size} />
        <Map map={this.state.map} length={this.state.length} pending={this.state.pending}/>
      </div>
    );
  }
}

export default App;
