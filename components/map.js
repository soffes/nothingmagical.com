import React from 'react'
import styled from 'styled-components'

const MapContainer = styled.div`
  position: relative;
`

const Map = (props) => {
  return(
    <MapContainer>
      <img src={props.src} />
      {props.children}
    </MapContainer>
  )
}

export default Map
