import React, { useState, useEffect } from 'react'
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
  row: number
  isRow: number
}

export default function Element(props: Props) {
  return (
    <Wrapper row={props.row} isRow={props.isRow}>
      <Bg color="white">{getContent(props.type, props)}</Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ row: number; isRow: number }>`
  outline: white 2px solid;

  z-index: ${(p) => (p.row === p.isRow ? '1' : '0')};
  transition: all 0.3s;
  min-height: 100%;
  /* height: 100%;
  width: 100%; */
  height: ${(p) => (p.row === p.isRow ? 'fit-content' : 'inherit')};
  width: 100%;
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
