import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Element from './element'

export default function Pagina() {
  const [row, setRow] = useState<number>(0)
  function keyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        if (row !== 0) setRow(row - 1)
        break
      case 'ArrowDown':
        if (row !== 6) setRow(row + 1)
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown)
    return () => window.removeEventListener('keydown', keyDown)
  })

  return (
    <Wrapper>
      <Layer>
        <Element position={1} row={row} isRow={1} type="circle" />
        <Element position={2} row={row} isRow={1} type="circle" />
        <Element position={3} row={row} isRow={1} type="circle" />
        <Element position={4} row={row} isRow={1} type="circle" />
        <Element position={5} row={row} isRow={1} type="circle" />
        <Element position={6} row={row} isRow={2} type="dot" />
        <Element position={7} row={row} isRow={2} type="dot" />
        <Element position={8} row={row} isRow={2} type="dot" />
        <Element position={9} row={row} isRow={2} type="dot" />
        <Element position={10} row={row} isRow={2} type="dot" />
        <Element position={11} row={row} isRow={3} type="2dot" />
        <Element position={12} row={row} isRow={3} type="diagonalL" />
        <Element position={13} row={row} isRow={3} type="line" />
        <Element position={14} row={row} isRow={3} type="diagonalR" />
        <Element position={15} row={row} isRow={3} type="dot" />
        <Element position={16} row={row} isRow={4} type="3dot" />
        <Element position={17} row={row} isRow={4} type="3diagonalL" />
        <Element position={18} row={row} isRow={4} type="triangle" />
        <Element position={19} row={row} isRow={4} type="3diagonalR" />
        <Element position={20} row={row} isRow={4} type="dot" />
        <Element position={21} row={row} isRow={5} type="4dot" />
        <Element position={22} row={row} isRow={5} type="4diagonalL" />
        <Element position={23} row={row} isRow={5} type="square" />
        <Element position={24} row={row} isRow={5} type="4diagonalR" />
        <Element position={25} row={row} isRow={5} type="dot" />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  outline: white 2px solid;
  border-radius: 50%;
  @media only screen and (max-device-width: 414px) {
    width: 95vw;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
const Layer = styled.div`
  aspect-ratio: 1 / 1;
  width: 70.4%;
  position: relative;
`
