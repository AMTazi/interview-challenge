import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #eaeaea;
  background-color: white;
  min-height: 500px;
  margin: 40px auto;
  width: 1005px;
`

const Box = styled.div`
  float: left;
  border: 1px solid #bababa;
  width: ${({length}) => ((length && 1000/length) || '100')+'px'};
  height: ${({length}) => ((length && 1000/length) || '100')+'px'};
  background-color: ${({p}) => (p === 0 && 'white') || (p === 1 && '#f542b6') || (p === 2 && '#6dadf7')};
`


class Map extends Component {

  render_map() {
    if(this.props.map.length < 1) return <div></div>
    const boxes = []
    this.props.map.forEach((row, i) => {
      row.forEach((v, j) => {
        boxes.push(<Box key={`${i}-${j}`} length={this.props.length} p={v}/>)
      })
    })

    return boxes;
  }

  render() {

    return (
      <Wrapper >
        {this.render_map()}
      </Wrapper>
    );
  }
}

export default Map;
