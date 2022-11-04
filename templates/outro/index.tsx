import React from 'react'
import styled from 'styled-components'
import Element from './element'

export default function Outro() {
  return (
    <Wrapper>
      <Layer>
        <Element type="title" title="CRIANÇA" />
        <Element type="title" title="JOVEM" />
        <Element type="title" title="ADULTO" />
        <Element type="title" title="ANCIÃO" />
        <Element type="title" title="ILUMINAÇÃO" />
        <Element type="sou" title="CORPO" />
        <Element type="sou" title="REPUTAÇÃO" />
        <Element type="sou" title="MENTE" />
        <Element type="sou" title="CONSCIÊNCIA" />
        <Element type="sou" title="sou" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="title" title="posse" />
        <Element type="title" title="tempo" />
        <Element type="title" title="ciclos" />
        <Element type="title" title="propósito" />
        <Element type="title" title="imortalidade" />
        <Element type="title" title="brincar" />
        <Element type="title" title="estudar" subTitle="(as 4 dimensões)" />
        <Element type="title" title="trabalhar" subTitle="(os 4 corpos)" />
        <Element type="title" title="estudar" subTitle="(os 4 elementos)" />
        <Element type="title" title="integrar" />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  height: 95vh;
  width: 60vw;
  position: relative;
  outline: white 2px solid;
  @media only screen and (max-device-width: 414px) {
    width: 95vw;
  }
`
const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 25% 12% 21% 21% 21%;
`
