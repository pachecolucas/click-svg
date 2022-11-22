import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Element from './element'

export default function Pagina() {
  const [row, setRow] = useState(0)

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
      <Layer row={row}>
        <Element row={row} isRow={1} img={1} type="circle" />
        <Element isRow={1} row={row} type="circle" img={2} />
        <Element isRow={1} row={row} type="circle" img={3} />
        <Element isRow={1} row={row} type="circle" img={4} />
        <Element isRow={1} row={row} type="circle" img={5} />
        <Element isRow={2} row={row} type="dot" subType="sou" img={1} />
        <Element isRow={2} row={row} type="dot" subType="sou" img={2} />
        <Element isRow={2} row={row} type="dot" subType="sou" img={3} />
        <Element isRow={2} row={row} type="dot" subType="sou" img={4} />
        <Element isRow={2} row={row} type="dot" subType="sou" img={5} />
        <Element isRow={3} row={row} type="2dot" img={1} />
        <Element isRow={3} row={row} type="diagonalL" img={2} />
        <Element isRow={3} row={row} type="line" img={3} />
        <Element isRow={3} row={row} type="diagonalR" img={4} />
        <Element isRow={3} row={row} type="dot" subType="ego" img={5} />
        <Element isRow={4} row={row} type="3dot" img={1} />
        <Element isRow={4} row={row} type="3diagonalL" img={2} />
        <Element isRow={4} row={row} type="triangle" img={3} />
        <Element isRow={4} row={row} type="3diagonalR" img={4} />
        <Element isRow={4} row={row} type="dot" subType="simple" img={5} />
        <Element isRow={5} row={row} type="4dot" img={1} />
        <Element isRow={5} row={row} type="4diagonalL" img={2} />
        <Element isRow={5} row={row} type="square" img={3} />
        <Element isRow={5} row={row} type="4diagonalR" img={4} />
        <Element isRow={5} row={row} type="dot" subType="last" img={5} />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(80vh, 80vw);
  position: relative;
  outline: white 2px solid;
  border-radius: 50%;
  @media only screen and (max-device-width: 414px) {
    width: 95vw;
  }
`
const Layer = styled.div<{ row: number }>`
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  height: ${(p) => (p.row > 0 ? '100%' : 'inherit')};
  width: ${(p) => (p.row > 0 ? '100%' : '70.4%')};
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`
