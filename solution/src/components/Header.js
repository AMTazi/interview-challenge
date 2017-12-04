import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #eaeaea;
  background-color: white;
  height: 150px;
  padding: 20px;
`

const Input = styled.input`
  height: 50px;
  width: 400px;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.3em;
`

const Button = styled.button`
  background-color: #0a8cff;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin-left: 10px;
  height: 40px;
  width: 80px;
  border: none;
  outline: none;
  cursor: pointer;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  onChange(e) {
    const value = e.currentTarget.value
    console.log(value);
    this.setState({input: '2 1 3'})
  }

  parseInput() {
    return [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]
  }

  render() {
    const { run, reset } = this.props;

    return (
      <Wrapper >
        <Input placeholder="Enter an array like this: 2 3 4"
          value={this.state.input}
          onChange={this.onChange.bind(this)}
        />
        <div style={{marginTop: '15px'}}>
          <Button onClick={() => run && run(this.parseInput())}>Run</Button>
          <Button style={{backgroundColor: 'red'}} onClick={() => reset && reset() }>Reset</Button>
        </div>
      </Wrapper>
    );
  }
}

export default Header;
