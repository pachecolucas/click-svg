import React, { useState } from 'react'
import styled from 'styled-components'
import Elemente from 'templates/outro/element'
import Ego from 'templates/outro/element/ego'
import Sou from 'templates/outro/element/sou'
import getContent from './getContent'

export type Props = {
  type:
    | 'circle'
    | 'dot'
    | '2dot'
    | '3dot'
    | '4dot'
    | 'triangle'
    | 'square'
    | 'line'
    | 'diagonalR'
    | '3diagonalR'
    | '4diagonalR'
    | 'diagonalL'
    | '3diagonalL'
    | '4diagonalL'
  subType?: 'sou' | 'ego'
  text: string
  title: string
  subTitle?: string
  text2?: string
}

export default function Element(props: Props) {
  const [hover, setHover] = useState<boolean>(false)

  function handleClickMouseEnter() {
    setHover(true)
  }
  function handleClickMouseLeave() {
    setHover(false)
  }
  return (
    <Wrapper
      hover={hover}
      onMouseEnter={handleClickMouseEnter}
      onMouseLeave={handleClickMouseLeave}
    >
      <Bg color="white">{getContent(props.type, hover, props)}</Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hover: boolean }>`
  outline: white 2px solid;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  z-index: ${(p) => (p.hover ? '1' : '0')};
  transition: scale 0.3s, z-index 0.1s, height 0.3s;
  min-height: 100%;
  height: ${(p) => (p.hover ? 'fit-content' : 'inherit')};
  background-color: black;
`
const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  // center
  height: 100%;
  width: 100%;
`
