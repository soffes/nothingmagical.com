import React from 'react'
import styled from 'styled-components'

const Hotspot = styled.a`
  position: absolute;
  display: block;
  height: 35px;
  color: rgba(0,0,0,0);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

Hotspot.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rel: "external nofollow"
}

export default Hotspot
