import Container from '../components/container'
import Map from '../components/map'
import Hotspot from '../components/hotspot'
import Head from 'next/head'

export default () => (
  <Container>
    <Map src="/static/about.svg">
      <Hotspot href="https://soff.es/" x="35" y="100" width="150" height="35">Sam Soffes</Hotspot>
      <Hotspot href="https://whiteboard.ink/" x="150" y="220" width="80" height="35">Ink</Hotspot>
      <Hotspot href="https://twitter.com/nothingmagical" y="317" width="190" height="38">@nothingmagical</Hotspot>
      <Hotspot href="mailto:hi@nothingmagical.com" y="355" width="250" height="38">hi@nothingmagical.com</Hotspot>
    </Map>
  </Container>
)
