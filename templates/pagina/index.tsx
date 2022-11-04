import styled from 'styled-components'
import Element from './element'

export default function Pagina() {
  return (
    <Wrapper>
      <Layer>
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
        <Element type="2dot" />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  position: relative;
  outline: white 2px solid;
  border-radius: 50%;
`
const Layer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 70.4%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`
