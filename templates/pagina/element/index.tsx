import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
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
      <Bg color=""></Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hover: boolean }>`
  outline: white 1px solid;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  transition: scale 0.3s, filter 0.3s;
`
const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  // center
  display: flex;
  justify-content: center;
  align-items: center;
`
