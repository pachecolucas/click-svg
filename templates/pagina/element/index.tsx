import React from 'react'
import styled from 'styled-components'
import getSvg from './getSvg'
import HoverElement from './hoverElement'

export type Props = {
  position: number
  type:
    | 'circle'
    | 'dot'
    | '2dot'
    | 'diagonalL'
    | 'line'
    | 'diagonalR'
    | '3dot'
    | '3diagonalL'
    | 'triangle'
    | '3diagonalR'
    | '4dot'
    | '4diagonalL'
    | 'square'
    | '4diagonalR'
  row: number
  isRow: number
}
type Positions = {
  top: string
  left: string
  right: string
  bottom: string
  onRow: {
    top: string
    left: string
    right: string
    bottom: string
  }
}
const POSITIONS: Positions[] = [
  {
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-20%',
      left: '-45%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '0%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-20%',
      left: '-3%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '0%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-20%',
      left: '39%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '0%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-20%',
      left: '81%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '0%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-20%',
      left: '123%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '20%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '20%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '20%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '20%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '40%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '40%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '40%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '40%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '40%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '60%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '60%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '60%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '60%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '60%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '80%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '80%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '80%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '80%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
  {
    top: '80%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    onRow: {
      top: '-5%',
      left: '-5%',
      right: 'auto',
      bottom: 'auto',
    },
  },
]

export default function Element(props: Props) {
  return (
    <Wrapper
      color="white"
      bg="black"
      pos={POSITIONS[props.position - 1]}
      row={props.row}
      isRow={props.isRow}
    >
      {props.row === props.isRow ? (
        <HoverElement
          title="CRIANÇA"
          text="you"
          subTitle="indentificar os pontos"
        />
      ) : (
        getSvg(props.type)
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  color: string
  bg: string
  pos: Positions
  row: number
  isRow: number
}>`
  outline: white 2px solid;
  transition: 0.3s all;
  background-color: ${(p) => p.bg};
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  height: ${(p) => (p.isRow === p.row ? 'fit-content' : '20%')};
  width: 20%;
  position: absolute;
  top: ${(p) => (p.isRow === p.row ? p.pos.onRow.top : p.pos.top)};
  left: ${(p) => (p.isRow === p.row ? p.pos.onRow.left : p.pos.left)};
  right: ${(p) => (p.isRow === p.row ? p.pos.onRow.right : p.pos.right)};
  bottom: ${(p) => (p.isRow === p.row ? p.pos.onRow.bottom : p.pos.bottom)};
`
