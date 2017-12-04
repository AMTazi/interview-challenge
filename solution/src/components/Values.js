import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #eaeaea;
  background-color: white;
  height: 150px;
  margin-top: 30px;
  padding: 20px 30px;
`

const Text = styled.p`
  font-size: 1.9em;
  color: #353535;
`

class Values extends Component {
  render() {
    return (
      <Wrapper >
        <Text>water_size: {this.props.water_size}</Text>
      </Wrapper>
    );
  }
}

export default Values;
