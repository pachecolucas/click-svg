import React from 'react'
import styled from 'styled-components'
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
  subType?: 'sou' | 'ego' | 'simple' | 'last'
  img: number
  active: boolean
}

export default function Element(props: Props) {
  return (
    <Wrapper active={props.active}>
      <Bg color="white">{getContent(props.type, props.active, props)}</Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ active: boolean }>`
  outline: white 2px solid;

  z-index: ${(p) => (p.active ? '1' : '0')};
  transition: all 0.3s;
  min-height: 100%;
  /* height: 100%;
  width: 100%; */
  height: ${(p) => (p.active ? 'fit-content' : 'inherit')};
  width: 100%;
`
const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  background-color: black;
  // center
  height: 100%;
  width: 100%;
`
