import styled from 'styled-components'
import Element from './element'

export default function Setenios(props: any) {
  return (
    <Wrapper>
      <Element position={1} type="water" />
      <Element position={2} type="air" />
      <Element position={3} type="earth" />
      <Element position={4} type="fire" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  position: relative;
`
